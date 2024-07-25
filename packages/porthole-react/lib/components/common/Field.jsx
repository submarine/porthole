import React from 'react';

import { Field as HeadlessField } from '@headlessui/react';

export const Field = ({ ...props }) => {
  return (
    <HeadlessField {...props} />
  );
};
