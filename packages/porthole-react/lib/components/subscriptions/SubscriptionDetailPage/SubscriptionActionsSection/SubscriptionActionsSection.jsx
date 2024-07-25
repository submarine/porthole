import React from 'react';

import { Section, SectionContent } from '../../../common/index.js';

import { Pause } from './Pause';
import { Process } from './Process';
import { Resume } from './Resume';
import { SetFrequency } from './SetFrequency';
import { SetNextDelivery } from './SetNextDelivery';
import { Skip } from './Skip';

export const SubscriptionActionsSection = ({ subscription }) => {
  return (
    <Section>
      <SectionContent>
        <Process subscription={subscription} />
        <Skip subscription={subscription} />
        {subscription.isPaused ? (
          <Resume
            subscription={subscription}
          />
        ) : (
          <Pause
            subscription={subscription}
          />
        )}
        <SetNextDelivery subscription={subscription} />
        <SetFrequency subscription={subscription} />
      </SectionContent>
    </Section>
  );
}
