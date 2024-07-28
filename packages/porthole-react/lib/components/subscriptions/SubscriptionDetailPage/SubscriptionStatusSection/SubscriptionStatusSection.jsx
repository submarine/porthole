import React from 'react';

import { InlineStack, Section, SectionContent, SectionHeader } from '../../../common';

import { Cancel } from './Cancel';
import { Pause } from './Pause';
import { Resume } from './Resume';

export const SubscriptionStatusSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title="Manage subscription"
      />
      <SectionContent>
        <InlineStack wrap={true}>
          {subscription.canPause && <Pause subscription={subscription} />}
          {subscription.canResume && <Resume subscription={subscription} />}
          {subscription.canCancel && <Cancel subscription={subscription} />}
        </InlineStack>
      </SectionContent>
    </Section>
  );
}
