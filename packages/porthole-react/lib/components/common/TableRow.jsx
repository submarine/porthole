import React from 'react';

import { useThemedComponent } from '../../theme';

export const TableRow = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('TableRow', props);

  return (
    <tr className={className} style={style} role="row" {...props}>
      {children}
    </tr>
  );
};
