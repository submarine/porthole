import React from 'react';

import { Banner } from '../../common/index.js';

export const MembershipListError = ({ message }) => {
  return (
    <Banner tone="error" title="Error">
      {message}
    </Banner>
  )
}
