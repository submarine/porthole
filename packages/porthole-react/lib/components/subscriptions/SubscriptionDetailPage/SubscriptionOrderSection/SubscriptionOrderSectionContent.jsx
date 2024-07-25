import React from 'react';

import { SubscriptionOrderError } from './SubscriptionOrderError';
import { SubscriptionOrderDetail } from './SubscriptionOrderDetail';
import { SubscriptionOrderLoading } from './SubscriptionOrderLoading';

export const SubscriptionOrderSectionContent = ({ subscription, subscriptionOrder, subscriptionOrderLoading, subscriptionOrderError }) => {
  if (!subscriptionOrder || subscriptionOrderLoading) {
    return (
      <SubscriptionOrderLoading />
    )
  }

  if (subscriptionOrderError) {
    return (
      <SubscriptionOrderError
        message={subscriptionOrderError.message}
      />
    )
  }

  return (
    <SubscriptionOrderDetail
      subscription={subscription}
      subscriptionOrder={subscriptionOrder}
    />
  )
}
