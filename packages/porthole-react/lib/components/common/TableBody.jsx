import React from 'react';

import { useThemedComponent } from '../../theme';

export const TableBody = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('TableBody', props);

  return (
    <tbody className={className} style={style} role="rowgroup" {...props}>
      {children}
    </tbody>
  );
};
