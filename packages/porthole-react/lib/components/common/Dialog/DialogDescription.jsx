import React from 'react';

import { Description as HeadlessDialogDescription } from '@headlessui/react';

export const DialogDescription = ({ description, ...props }) => {
  return (
    <HeadlessDialogDescription {...props}>
      {description}
    </HeadlessDialogDescription>
  );
};
