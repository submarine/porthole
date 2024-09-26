import React from 'react';

import { MembershipActionsSection } from './MembershipActionsSection';
import { MembershipOrderSection } from './MembershipOrderSection';
import { MembershipOverviewSection } from './MembershipOverviewSection';
import { MembershipPaymentSection } from './MembershipPaymentSection';
import { MembershipStatusSection } from './MembershipStatusSection';

export const MembershipDetail = ({ subscription }) => {
  return (
    <div>
      <div>
        <MembershipOverviewSection
          subscription={subscription}
        />
        <MembershipActionsSection
          subscription={subscription}
        />
        {!subscription.isCancelled && (<MembershipOrderSection
          subscription={subscription}
        />)}
      </div>
      <div>
        <MembershipPaymentSection
          subscription={subscription}
        />
        {!subscription.isCancelled && (<MembershipStatusSection
          subscription={subscription}
        />)}
      </div>
    </div>
  )
}
