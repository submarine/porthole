import React from 'react';

import { Section, SectionContent, SectionHeader } from '../../../common';

import { Cancel } from './Cancel';
import { Pause } from './Pause';
import { Resume } from './Resume';

export const SubscriptionStatusSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title="SubscriptionStatusSection"
      />
      <SectionContent>
        {subscription.canPause && <Pause subscription={subscription} />}
        {subscription.canResume && <Resume subscription={subscription} />}
        {subscription.canCancel && <Cancel subscription={subscription} />}
      </SectionContent>
    </Section>
  );
}