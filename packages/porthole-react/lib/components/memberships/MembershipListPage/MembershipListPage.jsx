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
            title="Memberships"
          />
          <SectionContent>
            <MembershipListPageContent
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
