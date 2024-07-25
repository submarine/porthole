import React from 'react';

import { DialogActions } from './DialogActions';
import { DialogDescription } from './DialogDescription';
import { DialogPanel } from './DialogPanel';
import { DialogTitle } from './DialogTitle';

export const Dialog = ({ open, title, description, actions, children, ...props }) => {
  return (
    <div {...props}>
      <DialogPanel>
        <DialogTitle title={title} />
        <DialogDescription description={description} />
        {children}
        <DialogActions actions={actions} />
      </DialogPanel>
    </div>
  );
};
