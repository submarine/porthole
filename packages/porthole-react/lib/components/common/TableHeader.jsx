import React from 'react';

import { useThemedComponent } from '../../theme';

export const TableHeader = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('TableHeader', props);

  return (
    <th className={className} style={style} {...props}>
      {children}
    </th>
  );
};
