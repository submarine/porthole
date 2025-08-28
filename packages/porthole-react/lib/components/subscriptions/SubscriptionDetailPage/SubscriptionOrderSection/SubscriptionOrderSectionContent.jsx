import React from 'react';

import { SubscriptionOrderError } from './SubscriptionOrderError';
import { SubscriptionOrderDetail } from './SubscriptionOrderDetail';
import { SubscriptionOrderLoading } from './SubscriptionOrderLoading';
import { SubscriptionOrderNone } from './SubscriptionOrderNone';

export const SubscriptionOrderSectionContent = ({ subscription, subscriptionOrder, subscriptionOrderLoading, subscriptionOrderError }) => {
  if (!subscription.nextScheduledOrder) {
    return <SubscriptionOrderNone />
  }

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
