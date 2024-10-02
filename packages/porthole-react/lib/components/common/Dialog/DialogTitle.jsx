import React from 'react';

import { useThemedComponent } from '../../../theme';

export const DialogTitle = ({ title, ...props }) => {
  const { className, style } = useThemedComponent('DialogTitle');

  return (
    <h3 className="text-xl font-medium tracking-normal font-sans text-grey-900 capitalize">
      {title}
    </h3>
  );
};
