import React from 'react';

import { useThemedComponent } from '../../theme';

export const Duration = ({ months, days }) => {
  const { className, style } = useThemedComponent('Duration');

  return (
    <time className={className} style={style} dateTime={`P${months * 30 + days}D`}>
      {[
        months > 0 ? `${months} months, ` : '',
        days > 0 ? `${days} days` : ''
      ].join('')}
    </time>
  );
};
