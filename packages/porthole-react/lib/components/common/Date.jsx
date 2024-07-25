import React from 'react';

import { DATE_MED_WITH_WEEKDAY, formatDateTime } from '@submarine/porthole-core';

export const Date = ({ dateTime, format = DATE_MED_WITH_WEEKDAY }) => {
  return (
    <time dateTime={dateTime}>
      {formatDateTime(dateTime, format)}
    </time>
  );
};
