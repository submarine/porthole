import React from 'react';
import { useParams } from 'react-router-dom';

import { useSubscriptionOrder } from '../../../../hooks';

import { SubscriptionOrderSectionContent } from './SubscriptionOrderSectionContent';

export const SubscriptionOrderSection = ({ subscription }) => {
  const { subscriptionOrderId } = useParams();
  const {
    subscriptionOrder,
    subscriptionOrderLoading,
    subscriptionOrderError
  } = useSubscriptionOrder({
    id: subscriptionOrderId || subscription.nextScheduledOrder.id
  });

  return (
    <SubscriptionOrderSectionContent
      subscriptionOrder={subscriptionOrder}
      subscriptionOrderLoading={subscriptionOrderLoading}
      subscriptionOrderError={subscriptionOrderError}
    />
  );
}
