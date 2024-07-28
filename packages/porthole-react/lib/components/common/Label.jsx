import React from 'react';

import { Label as HeadlessLabel } from '@headlessui/react';
import { useThemedComponent } from '../../theme';

export const Label = ({ ...props }) => {
  const { className, style } = useThemedComponent('Label');

  return (
    <HeadlessLabel className={className} style={style} {...props} />
  );
};
