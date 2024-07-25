import React from 'react';
import { DateTime } from 'luxon';

import { DATE_MED_WITH_WEEKDAY, formatDateTime } from '@submarine/porthole-core';

export const Date = ({ dateTime, format = DATE_MED_WITH_WEEKDAY }) => {
  return (
    <span>
      {formatDateTime(dateTime, format)}
    </span>
  );
};
