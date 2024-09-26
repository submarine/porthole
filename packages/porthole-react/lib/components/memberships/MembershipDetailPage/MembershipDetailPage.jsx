import React from 'react';
import { useParams } from 'react-router-dom';

import { useSubscription } from '../../../hooks';

import { Page, PageHeader, PageContent } from '../../common';
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
    <Page>
      <PageHeader
        title="Account"
        breadcrumbs={[
          {
            href: '/memberships',
            title: 'Return to Memberships'
          }
        ]}
      />
      <PageContent>
        <MembershipDetailPageContent
          subscription={subscription}
          subscriptionLoading={subscriptionLoading}
          subscriptionError={subscriptionError}
        />
      </PageContent>
    </Page>
  );
}
