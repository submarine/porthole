import React from 'react';

import { Date, Section, SectionContent, SectionHeader, Time } from '../../../common';

export const MembershipOverviewSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title={`Membership ${subscription ? subscription.identifier : '...'}`}
      />
      <SectionContent>
        {subscription.isActive && (<p>
          Your next payment will be processed on <Date dateTime={subscription.nextBillingAt} /> at <Time dateTime={subscription.nextBillingAt} />.
        </p>)}
        {subscription.isCancelled && (<p>
          This membership was cancelled on <Date dateTime={subscription.cancelledAt} /> at <Time dateTime={subscription.cancelledAt} />.
        </p>)}
      </SectionContent>
    </Section>
  );
}
