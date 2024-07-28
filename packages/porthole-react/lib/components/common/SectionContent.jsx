import React from 'react';

import { useThemedComponent } from '../../theme';

export const SectionContent = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('SectionContent');

  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};
