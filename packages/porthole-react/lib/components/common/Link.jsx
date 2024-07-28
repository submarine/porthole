import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useThemedComponent } from '../../theme';

export const Link = ({ href, external, children, ...props }) => {
  const { className, style } = useThemedComponent('Link', {
    external, ...props
  });

  if (external) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={className} style={style}>
      {children}
    </RouterLink>
  );
};
