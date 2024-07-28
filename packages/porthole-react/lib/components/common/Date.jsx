import React from 'react';

import { DATE_MED_WITH_WEEKDAY, formatDateTime } from '@submarine/porthole-core';
import { useThemedComponent } from '../../theme';

export const Date = ({ dateTime, format = DATE_MED_WITH_WEEKDAY }) => {
  const { className, style } = useThemedComponent('Date');

  return (
    <time className={className} style={style} dateTime={dateTime}>
      {formatDateTime(dateTime, format)}
    </time>
  );
};
