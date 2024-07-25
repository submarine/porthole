import React from 'react';

import { SubscriptionError } from './SubscriptionError';
import { SubscriptionDetail } from './SubscriptionDetail';
import { SubscriptionLoading } from './SubscriptionLoading';

export const SubscriptionDetailPageContent = ({ subscription, subscriptionLoading, subscriptionError }) => {
  if (!subscription || subscriptionLoading) {
    return (
      <SubscriptionLoading />
    )
  }

  if (subscriptionError) {
    return (
      <SubscriptionError
        message={subscriptionError.message}
      />
    )
  }

  return (
    <SubscriptionDetail
      subscription={subscription}
    />
  )
}
