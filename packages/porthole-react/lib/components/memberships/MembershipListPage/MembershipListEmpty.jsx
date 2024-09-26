import React from 'react';

import { Banner } from '../../common/index.js';

export const MembershipListEmpty = () => {
  return (
    <Banner title="No subscriptions found.">
      <p>
        You don't have any memberships. <a href="/">Browse our store</a> to start one.
      </p>
    </Banner>
  )
}
