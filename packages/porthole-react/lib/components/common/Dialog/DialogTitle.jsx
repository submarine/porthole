import React from 'react';

import { useThemedComponent } from '../../../theme';

export const DialogTitle = ({ title, ...props }) => {
  const { className, style } = useThemedComponent('DialogTitle');

  return (
    <h2 className={className} style={style} {...props}>
      {title}
    </h2>
  );
};
