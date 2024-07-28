import React from 'react';

import { InlineStack, Section, SectionContent } from '../../../common/index.js';

import { Process } from './Process';
import { SetFrequency } from './SetFrequency';
import { SetNextDelivery } from './SetNextDelivery';
import { Skip } from './Skip';

export const SubscriptionActionsSection = ({ subscription }) => {
  return (
    <Section>
      <SectionContent>
        <InlineStack wrap={true}>
          <Process subscription={subscription} />
          <Skip subscription={subscription} />
          <SetNextDelivery subscription={subscription} />
          <SetFrequency subscription={subscription} />
        </InlineStack>
      </SectionContent>
    </Section>
  );
}
