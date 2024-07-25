import React from 'react';

import { formatDateTime, TIME_SIMPLE } from '@submarine/porthole-core';

export const Time = ({ dateTime, format = TIME_SIMPLE }) => {
  return (
    <time dateTime={dateTime}>
      {formatDateTime(dateTime, format)}
    </time>
  );
};
