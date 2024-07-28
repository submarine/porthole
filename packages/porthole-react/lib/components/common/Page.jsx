import React from 'react';

import { useThemedComponent } from '../../theme';

export const Page = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('Page');

  return (
    <section className={className} style={style} {...props}>
      {children}
    </section>
  );
};
