import React from 'react';
import { useParams } from 'react-router-dom';

import { useSubscriptionOrder } from '../../../../hooks';

import { Section, SectionContent, SectionHeader } from '../../../common';
import { MembershipOrderSectionContent } from './MembershipOrderSectionContent';
import {MembershipOrderDetailLine} from "./MembershipOrderDetailLine.jsx";

export const MembershipOrderSection = ({ subscription }) => {
  const { subscriptionOrderId } = useParams();
  const {
    subscriptionOrder,
    subscriptionOrderLoading,
    subscriptionOrderError
  } = useSubscriptionOrder({
    id: subscriptionOrderId || subscription.nextScheduledOrder.id
  });

  return (
    <div>
      <MembershipOrderSectionContent
        subscription={subscription}
        subscriptionOrder={subscriptionOrder}
        subscriptionOrderLoading={subscriptionOrderLoading}
        subscriptionOrderError={subscriptionOrderError}
      />
    </div>
  );
}
