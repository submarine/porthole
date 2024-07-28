import React from 'react';

import { useThemedComponent } from '../../theme';

export const TableCell = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('TableCell', props);

  return (
    <td className={className} style={style} role="cell" {...props}>
      {children}
    </td>
  );
};
