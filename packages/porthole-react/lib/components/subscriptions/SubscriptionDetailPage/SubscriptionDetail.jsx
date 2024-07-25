import React from 'react';

import { SubscriptionOrderSection } from './SubscriptionOrderSection';

export const SubscriptionDetail = ({ subscription }) => {
  return (
    <div>
      <div>
        <SubscriptionOrderSection
          subscription={subscription}
        />
      </div>
      <div>

      </div>
    </div>
  )
}
