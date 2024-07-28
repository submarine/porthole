import React from 'react';

import { useThemedComponent } from '../../theme';

export const Text = ({ as, children, ...props }) => {
  const { className, style } = useThemedComponent('Text', props);

  const Component = as || 'p';

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};
