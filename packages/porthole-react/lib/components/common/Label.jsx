import React from 'react';

import { Label as HeadlessLabel } from '@headlessui/react';

export const Label = ({ ...props }) => {
  return (
    <HeadlessLabel {...props} />
  );
};
