import React from 'react';

import { SubscriptionActionsSection } from './SubscriptionActionsSection';
import { SubscriptionDeliverySection } from './SubscriptionDeliverySection';
import { SubscriptionOrderSection } from './SubscriptionOrderSection';
import { SubscriptionOverviewSection } from './SubscriptionOverviewSection';
import { SubscriptionPaymentSection } from './SubscriptionPaymentSection';
import { SubscriptionStatusSection } from './SubscriptionStatusSection';

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
        <SubscriptionDeliverySection
          subscription={subscription}
        />
        <SubscriptionPaymentSection
          subscription={subscription}
        />
        <SubscriptionStatusSection
          subscription={subscription}
        />
      </div>
    </div>
  )
}
