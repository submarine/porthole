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
        <div className="relative modal-dialog-inner">
          <div className="flex flex-col gap-4 px-4 py-6 md:p-8">
            <DialogTitle title={title} />
            <DialogDescription description={description} />
            {children}
            <DialogActions actions={actions} />
          </div>
        </div>
      </DialogPanel>
    </HeadlessDialog>
  );
};
