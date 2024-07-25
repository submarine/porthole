import React from 'react';

import { Select as HeadlessSelect } from '@headlessui/react';

export const Select = ({ ...props }) => {
  return (
    <HeadlessSelect {...props} />
  );
};
