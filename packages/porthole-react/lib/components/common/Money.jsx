import React from 'react';

import { formatMoney } from '@submarine/porthole-core';

export const Money = ({ money }) => {
  return (
    <span>
      {formatMoney(money)}
    </span>
  );
};
