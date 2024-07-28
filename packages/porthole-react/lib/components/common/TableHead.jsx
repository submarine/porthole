import React from 'react';

import { useThemedComponent } from '../../theme';

export const TableHead = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('TableHead', props);

  return (
    <thead className={className} style={style} role="rowgroup" {...props}>
      {children}
    </thead>
  );
};
