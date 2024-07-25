import React from 'react';

import { DialogPanel as HeadlessDialogPanel } from '@headlessui/react';

export const DialogPanel = ({ children, ...props }) => {
  return (
    <HeadlessDialogPanel {...props}>
      {children}
    </HeadlessDialogPanel>
  );
};
