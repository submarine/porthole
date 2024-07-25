import React from 'react';

import { SubscriptionListError } from './SubscriptionListError';
import { SubscriptionList } from './SubscriptionList.jsx';
import { SubscriptionListLoading } from './SubscriptionListLoading';

export const SubscriptionListPageContent = ({ subscriptionCollection, subscriptionCollectionLoading, subscriptionCollectionError }) => {
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
    <SubscriptionList
      subscriptionCollection={subscriptionCollection}
    />
  )
}
