import React from 'react';

import { useThemedComponent } from '../../theme';

export const Image = ({ ...props }) => {
  const { className, style } = useThemedComponent('Image');

  return (
    <img className={className} style={style} {...props} />
  );
};
