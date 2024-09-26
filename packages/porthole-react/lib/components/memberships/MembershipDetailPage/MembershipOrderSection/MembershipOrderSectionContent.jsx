import React from 'react';

import { MembershipOrderError } from './MembershipOrderError';
import { MembershipOrderDetail } from './MembershipOrderDetail';
import { MembershipOrderLoading } from './MembershipOrderLoading';

export const MembershipOrderSectionContent = ({ subscription, subscriptionOrder, subscriptionOrderLoading, subscriptionOrderError }) => {
  if (!subscriptionOrder || subscriptionOrderLoading) {
    return (
      <MembershipOrderLoading />
    )
  }

  if (subscriptionOrderError) {
    return (
      <MembershipOrderError
        message={subscriptionOrderError.message}
      />
    )
  }

  return (
    <MembershipOrderDetail
      subscription={subscription}
      subscriptionOrder={subscriptionOrder}
    />
  )
}
