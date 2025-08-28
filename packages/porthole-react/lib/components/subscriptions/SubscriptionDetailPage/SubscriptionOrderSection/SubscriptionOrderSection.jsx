import React from 'react';
import { useParams } from 'react-router-dom';

import { useSubscriptionOrder } from '../../../../hooks';

import { Section, SectionContent, SectionHeader } from '../../../common';
import { SubscriptionOrderSectionContent } from './SubscriptionOrderSectionContent';

export const SubscriptionOrderSection = ({ subscription }) => {
  const { subscriptionOrderId } = useParams();
  const {
    subscriptionOrder,
    subscriptionOrderLoading,
    subscriptionOrderError
  } = useSubscriptionOrder({
    id: subscriptionOrderId || subscription.nextScheduledOrder?.id
  });

  return (
    <Section>
      <SectionHeader
        title={`Upcoming order ${subscriptionOrder ? subscriptionOrder.identifier : '...'}`}
      />
      <SectionContent>
        <SubscriptionOrderSectionContent
          subscription={subscription}
          subscriptionOrder={subscriptionOrder}
          subscriptionOrderLoading={subscriptionOrderLoading}
          subscriptionOrderError={subscriptionOrderError}
        />
      </SectionContent>
    </Section>
  );
}
