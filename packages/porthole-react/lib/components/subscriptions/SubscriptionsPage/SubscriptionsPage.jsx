import React from 'react';

import { Page, PageHeader, PageContent } from '../../common';
import { SubscriptionList } from '../SubscriptionList';

export const SubscriptionsPage = () => {
  return (
    <Page>
      <PageHeader
        title="Subscriptions"
        breadcrumbs={[
          {
            href: '/account',
            title: 'Back to account'
          }
        ]}
      />
      <PageContent>
        <SubscriptionList />
      </PageContent>
    </Page>
  );
}
