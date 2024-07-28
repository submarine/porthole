import React from 'react';

import { useThemedComponent } from '../../theme';

export const Section = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('Section');

  return (
    <section className={className} style={style} {...props}>
      {children}
    </section>
  );
};
