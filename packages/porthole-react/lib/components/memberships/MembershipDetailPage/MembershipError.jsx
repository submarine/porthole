import React from 'react';

import { Banner } from '../../common/index.js';

export const MembershipError = ({ message }) => {
  return (
    <Banner tone="error" title="Error">
      {message}
    </Banner>
  )
}
