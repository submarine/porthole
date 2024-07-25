import React from 'react';

import { Input as HeadlessInput } from '@headlessui/react';

export const Input = ({ ...props }) => {
  return (
    <HeadlessInput {...props} />
  );
};
