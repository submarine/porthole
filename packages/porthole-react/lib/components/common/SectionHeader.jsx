import React from 'react';

import { useThemedComponent } from '../../theme';

export const SectionHeader = ({ title, ...props }) => {
  const { className, style } = useThemedComponent('SectionHeader');

  return (
    <div className={className} style={style} {...props}>
      <h3>{title}</h3>
    </div>
  );
};
