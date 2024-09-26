import React from 'react';

import { InlineStack, Section, SectionContent } from '../../../common';

import { Process } from './Process';

export const MembershipActionsSection = ({ subscription }) => {
  return (
    <Section>
      <SectionContent>
        <InlineStack wrap={true}>
          <Process subscription={subscription} />
        </InlineStack>
      </SectionContent>
    </Section>
  );
}
