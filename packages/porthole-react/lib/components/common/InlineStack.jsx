import React from 'react';

import { useThemedComponent } from '../../theme';

export const InlineStack = ({ as, align, direction, gap, wrap, children }) => {
  const { className, style } = useThemedComponent('InlineStack', {
    align, direction, gap, wrap
  });

  const Component = as || 'div';

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};
