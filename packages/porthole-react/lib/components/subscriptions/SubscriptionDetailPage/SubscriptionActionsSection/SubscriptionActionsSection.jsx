import React from 'react';

import { Section, SectionContent } from '../../../common/index.js';

import { Pause } from '../SubscriptionStatusSection/Pause.jsx';
import { Process } from './Process';
import { Resume } from '../SubscriptionStatusSection/Resume.jsx';
import { SetFrequency } from './SetFrequency';
import { SetNextDelivery } from './SetNextDelivery';
import { Skip } from './Skip';

export const SubscriptionActionsSection = ({ subscription }) => {
  return (
    <Section>
      <SectionContent>
        <Process subscription={subscription} />
        <Skip subscription={subscription} />
        <SetNextDelivery subscription={subscription} />
        <SetFrequency subscription={subscription} />
      </SectionContent>
    </Section>
  );
}
