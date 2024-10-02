import React from 'react';

import { useSubscriptionCollection } from '../../../hooks';

import { Page, PageHeader, PageContent, Section, SectionHeader, SectionContent } from '../../common';
import { MembershipListPageContent } from './MembershipListPageContent';

export const MembershipListPage = () => {
  const {
    subscriptionCollection,
    subscriptionCollectionLoading,
    subscriptionCollectionError
  } = useSubscriptionCollection({
    variables: {
      first: 10
    }
  });

  return (
    <div className="account-orders orders-have-items grow">
      <div
        className="header relative flex items-center justify-between rounded bg-brand-marine px-4 py-3 lg:mb-4 lg:px-0 lg:py-0 lg:bg-transparent">
        <h3 className="text-xl font-medium tracking-normal text-white lg:text-grey-900 lg:text-2xl">Memberships</h3>
      </div>
      <div>
        <MembershipListPageContent
          subscriptionCollection={subscriptionCollection}
          subscriptionCollectionLoading={subscriptionCollectionLoading}
          subscriptionCollectionError={subscriptionCollectionError}
        />
      </div>
    </div>
  );
}
