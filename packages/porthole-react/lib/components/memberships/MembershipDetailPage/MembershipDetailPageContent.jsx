import React from 'react';

import { MembershipError } from './MembershipError';
import { MembershipDetail } from './MembershipDetail';
import { MembershipLoading } from './MembershipLoading';

export const MembershipDetailPageContent = ({ subscription, subscriptionLoading, subscriptionError }) => {
  if (!subscription || subscriptionLoading) {
    return (
      <MembershipLoading />
    )
  }

  if (subscriptionError) {
    return (
      <MembershipError
        message={subscriptionError.message}
      />
    )
  }

  return (
    <MembershipDetail
      subscription={subscription}
    />
  )
}
