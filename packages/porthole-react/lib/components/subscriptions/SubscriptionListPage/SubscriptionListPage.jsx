import React from 'react';

import { useSubscriptionCollection } from '../../../hooks';

import { Page, PageHeader, PageContent } from '../../common';
import { SubscriptionListPageContent } from './SubscriptionListPageContent';

export const SubscriptionListPage = () => {
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
        <SubscriptionListPageContent
          subscriptionCollection={subscriptionCollection}
          subscriptionCollectionLoading={subscriptionCollectionLoading}
          subscriptionCollectionError={subscriptionCollectionError}
        />
      </PageContent>
    </Page>
  );
}
