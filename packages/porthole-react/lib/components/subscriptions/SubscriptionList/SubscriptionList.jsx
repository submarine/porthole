import React from 'react';

import { useSubscriptionCollection } from '../../../hooks';

import { SubscriptionListError } from './SubscriptionListError';
import { SubscriptionListItems } from './SubscriptionListItems.jsx';
import { SubscriptionListLoading } from './SubscriptionListLoading';

export const SubscriptionList = () => {
  const {
    subscriptionCollection,
    subscriptionCollectionLoading,
    subscriptionCollectionError
  } = useSubscriptionCollection({
    variables: {
      first: 10
    }
  });

  if (!subscriptionCollection || subscriptionCollectionLoading) {
    return (
      <SubscriptionListLoading />
    )
  }

  if (subscriptionCollectionError) {
    return (
      <SubscriptionListError
        message={subscriptionCollectionError.message}
      />
    )
  }

  return (
    <SubscriptionListItems
      subscriptionCollection={subscriptionCollection}
    />
  )
}
