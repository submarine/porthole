import React from 'react';

import { Banner } from '../../common/index.js';

export const SubscriptionListEmpty = () => {
  return (
    <Banner title="No subscriptions found.">
      <p>
        You don't have any subscriptions. <a href="/">Browse our store</a> to start one.
      </p>
    </Banner>
  )
}
