import React from 'react';

import { useThemedComponent } from '../../theme';

export const Badge = ({ tone, children, ...props }) => {
  const { className, style } = useThemedComponent('Badge', {
    tone
  });

  return (
    <span className={className} style={style} {...props}>
      {children}
    </span>
  );
};
