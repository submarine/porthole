import React from 'react';

import { MembershipListError } from './MembershipListError';
import { MembershipList } from './MembershipList';
import { MembershipListLoading } from './MembershipListLoading';

export const MembershipListPageContent = ({ subscriptionCollection, subscriptionCollectionLoading, subscriptionCollectionError }) => {
  if (!subscriptionCollection || subscriptionCollectionLoading) {
    return (
      <MembershipListLoading />
    )
  }

  if (subscriptionCollectionError) {
    return (
      <MembershipListError
        message={subscriptionCollectionError.message}
      />
    )
  }

  return (
    <MembershipList
      subscriptionCollection={subscriptionCollection}
    />
  )
}
