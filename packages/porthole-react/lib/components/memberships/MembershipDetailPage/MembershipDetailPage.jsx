import React from 'react';
import { useParams } from 'react-router-dom';

import { useSubscription } from '../../../hooks';

import { MembershipDetailPageContent } from './MembershipDetailPageContent';

export const MembershipDetailPage = () => {
  const { id } = useParams();
  const {
    subscription,
    subscriptionLoading,
    subscriptionError
  } = useSubscription({
    id
  });

  return (
    <div className="flex flex-col lg:flex-row lg:items-start justify-between">
      <MembershipDetailPageContent
        subscription={subscription}
        subscriptionLoading={subscriptionLoading}
        subscriptionError={subscriptionError}
      />
    </div>
  );
}
