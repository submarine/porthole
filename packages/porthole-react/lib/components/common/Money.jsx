import React from 'react';

import { formatMoney } from '@submarine/porthole-core';
import { useThemedComponent } from '../../theme';

export const Money = ({ money }) => {
  const { className, style } = useThemedComponent('Money');

  return (
    <span className={className} style={style}>
      {formatMoney(money)}
    </span>
  );
};
