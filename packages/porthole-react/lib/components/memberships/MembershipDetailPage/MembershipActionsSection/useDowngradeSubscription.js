import {useMutation} from '@apollo/client';
import {gql} from '@apollo/client/core';
import {GET_SUBSCRIPTION} from "@submarine/porthole-core";

const DOWNGRADE_SUBSCRIPTION = gql`
  mutation DowngradeSubscription($subscriptionUpdateInput: SubscriptionUpdateInput!) {
    subscriptionUpdate(input: $subscriptionUpdateInput) {
      userErrors {
        field
        message
      }
    }
  }
`;

export const useDowngradeSubscription = ({ id, options = {} }) => {
  const [
    subscriptionDowngrade,
    {
      loading: subscriptionDowngrading,
      error: downgradeSubscriptionError
    }
  ] = useMutation(DOWNGRADE_SUBSCRIPTION, {
    refetchQueries: [GET_SUBSCRIPTION],
    ...options
  });

  const downgradeSubscription = ({ subscriptionProductVariantId, downgradeAt, targetPlanType }) => {
    subscriptionDowngrade({
      variables: {
        subscriptionUpdateInput: {
          id: `gid://submarine/Subscription/${id}`,
          customAttributes: [{
            name: '_downgrade_request_downgrade_at',
            value: downgradeAt
          }, {
            name: '_downgrade_request_status',
            value: 'pending'
          }, {
            name: '_downgrade_request_variant_id',
            value: subscriptionProductVariantId
          }, {
            name: '_target_plan_type',
            value: targetPlanType
          }]
        }
      }
    });
  };

  return {
    subscriptionDowngrading,
    downgradeSubscriptionError,
    downgradeSubscription
  };
};
