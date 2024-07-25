import React from 'react';

import { SubscriptionOrderError } from './SubscriptionOrderError';
import { SubscriptionOrderDetail } from './SubscriptionOrderDetail';
import { SubscriptionOrderLoading } from './SubscriptionOrderLoading';

export const SubscriptionOrderSectionContent = ({ subscriptionOrder, subscriptionOrderLoading, subscriptionOrderError }) => {
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
      subscriptionOrder={subscriptionOrder}
    />
  )
}
