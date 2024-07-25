import React from 'react';

import { Dialog as HeadlessDialog } from '@headlessui/react';

import { DialogActions } from './DialogActions';
import { DialogDescription } from './DialogDescription';
import { DialogPanel } from './DialogPanel';
import { DialogTitle } from './DialogTitle';

export const Dialog = ({ open, title, description, actions, children, ...props }) => {
  return (
    <HeadlessDialog open={open} {...props}>
      <DialogPanel>
        <DialogTitle title={title} />
        <DialogDescription description={description} />
        {children}
        <DialogActions actions={actions} />
      </DialogPanel>
    </HeadlessDialog>
  );
};
