import React from 'react';

import { Banner } from '../../common/index.js';

export const SubscriptionError = ({ message }) => {
  return (
    <Banner tone="error" title="Error">
      {message}
    </Banner>
  )
}
