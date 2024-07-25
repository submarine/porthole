import React from 'react';

import { Date, Section, SectionContent, Time } from '../../../common';

export const SubscriptionOverviewSection = ({ subscription }) => {
  return (
    <Section>
      <SectionContent>
        <p>
          {subscription.subscriptionPlan.frequency.title}.
        </p>
        <p>
          Your next order will be processed on <Date dateTime={subscription.nextBillingAt} /> at <Time dateTime={subscription.nextBillingAt} />.
        </p>
      </SectionContent>
    </Section>
  );
}
