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
        {!subscription.isCancelled && (<SubscriptionOrderSection
          subscription={subscription}
        />)}
      </div>
      <div>
        <SubscriptionDeliverySection
          subscription={subscription}
        />
        <SubscriptionPaymentSection
          subscription={subscription}
        />
        {!subscription.isCancelled && (<SubscriptionStatusSection
          subscription={subscription}
        />)}
      </div>
    </div>
  )
}
