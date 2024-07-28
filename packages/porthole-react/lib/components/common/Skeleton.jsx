import React from 'react';

import { useThemedComponent } from '../../theme';

export const Skeleton = () => {
  const { className, style } = useThemedComponent('Skeleton');

  return (
    <div className={className} style={style}>
      Loading...
    </div>
  );
};
