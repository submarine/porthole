import React from 'react';

import {Date, InlineStack, Section, SectionContent, SectionHeader} from '../../../common';

import { Cancel } from './Cancel';
import { RevertScheduledCancellation } from './RevertScheduledCancellation';

export const MembershipStatusSection = ({ subscription }) => {
  return (
    <Section>
      <SectionHeader
        title="Manage membership"
      />
      <SectionContent>
        {subscription.isActive && subscription.isPendingCancellation && (<p>
          Auto-renewal has been turned off and your membership will be automatically cancelled on <Date dateTime={subscription.cancelAt} />.
        </p>)}

        <InlineStack wrap={true}>
          {subscription.canCancel && !subscription.isPendingCancellation && <Cancel subscription={subscription} />}
          {subscription.canRevertScheduledCancellation && <RevertScheduledCancellation subscription={subscription} />}
        </InlineStack>
      </SectionContent>
    </Section>
  );
}
