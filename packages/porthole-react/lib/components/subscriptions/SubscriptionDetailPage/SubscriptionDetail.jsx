import React from 'react';

import { SubscriptionOrderSection } from './SubscriptionOrderSection';
import { SubscriptionActionsSection } from './SubscriptionActionsSection';
import { SubscriptionOverviewSection } from './SubscriptionOverviewSection';

export const SubscriptionDetail = ({ subscription }) => {
  return (
    <div>
      <div>
        <SubscriptionOverviewSection
          subscription={subscription}
        />
        <SubscriptionActionsSection
          subscription={subscription}
        />
        <SubscriptionOrderSection
          subscription={subscription}
        />
      </div>
      <div>

      </div>
    </div>
  )
}
