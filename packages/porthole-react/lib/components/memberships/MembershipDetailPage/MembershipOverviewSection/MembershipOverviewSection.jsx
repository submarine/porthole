import React from 'react';

import { Date, Section, SectionContent, SectionHeader, Text, Time } from '../../../common';

export const MembershipOverviewSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title={`Membership ${subscription ? subscription.identifier : '...'}`}
      />
      <SectionContent>
        {subscription.subscriptionPlan.frequency.minTotalCycles && (
          <Text>
            {subscription.processedOrdersCount} of {subscription.subscriptionPlan.frequency.minTotalCycles} payments processed.
          </Text>
        )}
        {subscription.isActive && (
          <Text>
          Your next payment will be processed on <Date dateTime={subscription.nextBillingAt} /> at <Time dateTime={subscription.nextBillingAt} />.
          </Text>
        )}
        {subscription.isCancelled && (
          <Text>
          This membership was cancelled on <Date dateTime={subscription.cancelledAt} /> at <Time dateTime={subscription.cancelledAt} />.
          </Text>
        )}
      </SectionContent>
    </Section>
  );
}
