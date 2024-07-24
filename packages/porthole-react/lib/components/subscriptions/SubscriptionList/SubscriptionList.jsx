import React from 'react';

import { useSubscriptionCollection } from '../../../hooks';

import { SubscriptionListList } from './SubscriptionListList';
import { SubscriptionListError } from './SubscriptionListError';
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
      <SubscriptionListError />
    )
  }

  return (
    <SubscriptionListList />
  )
}
