import React from 'react';

import { Banner } from '../../common';

export const SubscriptionListError = ({ message }) => {
  return (
    <Banner tone="error" title="Error">
      {message}
    </Banner>
  )
}
