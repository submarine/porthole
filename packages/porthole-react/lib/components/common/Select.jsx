import React from 'react';

import { Select as HeadlessSelect } from '@headlessui/react';
import { useThemedComponent } from '../../theme';

export const Select = ({ ...props }) => {
  const { className, style } = useThemedComponent('Select', props);

  return (
    <HeadlessSelect className={className} style={style} {...props} />
  );
};
