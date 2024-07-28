import React from 'react';

import { Dialog as HeadlessDialog } from '@headlessui/react';
import { useThemedComponent } from '../../../theme';

import { DialogActions } from './DialogActions';
import { DialogDescription } from './DialogDescription';
import { DialogPanel } from './DialogPanel';
import { DialogTitle } from './DialogTitle';

export const Dialog = ({ open, title, description, actions, children, ...props }) => {
  const { className, style } = useThemedComponent('Dialog', {
    open
  });

  return (
    <HeadlessDialog open={open} className={className} style={style} {...props}>
      <DialogPanel>
        <DialogTitle title={title} />
        <DialogDescription description={description} />
        {children}
        <DialogActions actions={actions} />
      </DialogPanel>
    </HeadlessDialog>
  );
};
