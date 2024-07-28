import React from 'react';

import { formatDateTime, TIME_SIMPLE } from '@submarine/porthole-core';
import { useThemedComponent } from '../../theme';

export const Time = ({ dateTime, format = TIME_SIMPLE }) => {
  const { className, style } = useThemedComponent('Time');

  return (
    <time className={className} style={style} dateTime={dateTime}>
      {formatDateTime(dateTime, format)}
    </time>
  );
};
