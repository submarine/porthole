import React from 'react';

import { useThemedComponent } from '../../theme';

export const TableFooter = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('TableFooter', props);

  return (
    <tfoot className={className} style={style} {...props}>
      {children}
    </tfoot>
  );
};
