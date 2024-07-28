import React from 'react';

import { useSubscriptionCollection } from '../../../hooks';

import { Page, PageHeader, PageContent, Section, SectionHeader, SectionContent } from '../../common';
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
        title="Account"
        breadcrumbs={[
          {
            external: true,
            href: '/account',
            title: 'Return to Account details'
          }
        ]}
      />
      <PageContent>
        <Section>
          <SectionHeader
            title="Subscriptions"
          />
          <SectionContent>
            <SubscriptionListPageContent
              subscriptionCollection={subscriptionCollection}
              subscriptionCollectionLoading={subscriptionCollectionLoading}
              subscriptionCollectionError={subscriptionCollectionError}
            />
          </SectionContent>
        </Section>
      </PageContent>
    </Page>
  );
}
