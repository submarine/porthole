import React from 'react';

import { useThemedComponent } from '../../theme';

export const PageContent = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('PageContent');

  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};
