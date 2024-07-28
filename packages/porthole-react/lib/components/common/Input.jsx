import React from 'react';

import { Input as HeadlessInput } from '@headlessui/react';
import { useThemedComponent } from '../../theme';

export const Input = ({ ...props }) => {
  const { className, style } = useThemedComponent('Input', props);

  return (
    <HeadlessInput className={className} style={style} {...props} />
  );
};
