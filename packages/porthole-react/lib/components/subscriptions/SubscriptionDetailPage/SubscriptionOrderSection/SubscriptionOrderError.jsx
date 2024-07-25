import React from 'react';

import { Banner } from '../../../common';

export const SubscriptionOrderError = ({ message }) => {
  return (
    <Banner tone="error" title="Error">
      {message}
    </Banner>
  )
}
