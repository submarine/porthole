import React from 'react';
import { useParams } from 'react-router-dom';

import { useSubscription } from '../../../hooks';

import { Page, PageHeader, PageContent } from '../../common';
import { SubscriptionDetailPageContent } from './SubscriptionDetailPageContent';

export const SubscriptionDetailPage = () => {
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
            href: '/subscriptions',
            title: 'Return to Subscriptions'
          }
        ]}
      />
      <PageContent>
        <SubscriptionDetailPageContent
          subscription={subscription}
          subscriptionLoading={subscriptionLoading}
          subscriptionError={subscriptionError}
        />
      </PageContent>
    </Page>
  );
}
