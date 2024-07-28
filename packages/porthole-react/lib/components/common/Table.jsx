import React from 'react';

import { useThemedComponent } from '../../theme';

export const Table = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('Table', props);

  return (
    <table className={className} style={style} role="table" {...props}>
      {children}
    </table>
  );
};
