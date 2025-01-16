import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { useEffect, useState } from 'react';

const GET_UPGRADE_DOWNGRADE_OPTIONS = gql`
  query UpgradeDowngradeOptions($id: GlobalID!) {
    subscription(id: $id) {
      id
      lines {
        product {
          id
        }
        productVariant {
          price {
            amount
          }
          id
        }
      }
      subscriptionPlan {
        frequency {
          description
        }
        subscriptionPlanGroup {
          productGroup {
            itemSources {
              resource {
                ... on ProductVariant {
                  id
                  externalId
                  price {
                    amount
                    currency
                  }
                  status
                  title
                  product {
                    id
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const buildUpgradeDowngradeOptions = (upgradeDowngradeOptionsData) => {
  let currentProductId;
  let currentVariantId;
  let currentVariantPrice;
  let frequencyDescription;
  let itemSources;
  let membershipItemSources;
  let upgradeItemSources;

  try {
    currentProductId = upgradeDowngradeOptionsData.subscription.lines[0].product.id;
    currentVariantId = upgradeDowngradeOptionsData.subscription.lines[0].productVariant.id;
    currentVariantPrice = upgradeDowngradeOptionsData.subscription.lines[0].productVariant.price.amount;
    frequencyDescription = upgradeDowngradeOptionsData.subscription.subscriptionPlan.frequency.description;
    itemSources = upgradeDowngradeOptionsData.subscription.subscriptionPlan.subscriptionPlanGroup.productGroup.itemSources || [];
  } catch { return [] }

  membershipItemSources = itemSources.filter(itemSource => itemSource.resource.status === 'PUBLISHED' && itemSource.resource.product.id === currentProductId);
  upgradeItemSources = itemSources.filter(itemSource => itemSource.resource.status === 'PUBLISHED' && itemSource.resource.product.id !== currentProductId);

  return membershipItemSources
    .map(itemSource => buildUpgradeDowngradeOption(itemSource, currentVariantId, currentVariantPrice, frequencyDescription, upgradeItemSources))
    .toSorted((a, b) => a.priceFormatted < b.priceFormatted ? -1 : +(a.priceFormatted > b.priceFormatted))
}

const buildUpgradeDowngradeOption = (itemSource, currentVariantId, currentVariantPrice, frequencyDescription, upgradeItemSources) => {
  const priceFormatted = `$${itemSource.resource.price.amount}`;
  const titleFull = itemSource.resource.title;
  const titleShort = itemSource.resource.title.split(' - ').filter(titlePart => titlePart !== itemSource.resource.product.title).join(' - ');
  const titleClass = titleShort.split(' ')[0];

  const isDowngrade = parseFloat(itemSource.resource.price.amount) < parseFloat(currentVariantPrice);
  const isUpgrade = !isDowngrade;

  // right now, only need to match on profession
  const profession = itemSource.resource.product.title.split(' ').reverse()[0];
  const upgradeItemSource = upgradeItemSources.find(upgradeItemSource => upgradeItemSource.resource.title.includes(profession));
  const upgradeProductVariantExternalId = upgradeItemSource ? upgradeItemSource.resource.externalId.split('/').reverse()[0] : null;

  return {
    current: itemSource.resource.id === currentVariantId,
    frequencyDescription,
    isDowngrade,
    isUpgrade,
    price: itemSource.resource.price,
    priceFormatted,
    productVariantId: itemSource.resource.id,
    titleClass,
    titleFull,
    titleShort,
    upgradeProductVariantId: upgradeItemSource?.resource?.id,
    upgradeProductVariantExternalId: upgradeProductVariantExternalId,
    upgradeProductVariantPrice: upgradeItemSource?.resource?.price?.amount
  }
}

export const useUpgradeDowngradeOptions = ({ id }) => {
  const [upgradeDowngradeOptions, setUpgradeDowngradeOptions] = useState(null);

  const {
    data: upgradeDowngradeOptionsData,
    loading: upgradeDowngradeOptionsLoading,
    error: upgradeDowngradeOptionsError
  } = useQuery(GET_UPGRADE_DOWNGRADE_OPTIONS, {
    variables: {
      id: `gid://submarine/Subscription/${id}`
    }
  });

  useEffect(() => {
    if (upgradeDowngradeOptionsData?.subscription?.id) {
      setUpgradeDowngradeOptions(
        buildUpgradeDowngradeOptions(upgradeDowngradeOptionsData)
      );
    }
  }, [upgradeDowngradeOptionsData]);

  return {
    upgradeDowngradeOptions,
    upgradeDowngradeOptionsLoading,
    upgradeDowngradeOptionsError
  };
};
