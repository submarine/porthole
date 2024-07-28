import React from 'react';

import {Date, Section, SectionContent, SectionHeader, Time} from '../../../common';

export const SubscriptionOverviewSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title={`Subscription ${subscription ? subscription.identifier : '...'}`}
      />
      <SectionContent>
        <p>
          {subscription.subscriptionPlan.frequency.title}.
        </p>
        {subscription.isActive && (<p>
          Your next order will be processed on <Date dateTime={subscription.nextBillingAt} /> at <Time dateTime={subscription.nextBillingAt} />.
        </p>)}
        {subscription.isCancelled && (<p>
          This subscription was cancelled on <Date dateTime={subscription.cancelledAt} /> at <Time dateTime={subscription.cancelledAt} />.
        </p>)}
      </SectionContent>
    </Section>
  );
}
