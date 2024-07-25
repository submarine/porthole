import React from 'react';

import { Date, Section, SectionContent, Time } from '../../../common/index.js';

import { Process } from './Process';

export const SubscriptionActionsSection = ({ subscription }) => {
  return (
    <Section>
      <SectionContent>
        <Process subscription={subscription} />
      </SectionContent>
    </Section>
  );
}
