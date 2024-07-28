import React from 'react';

import { DialogPanel as HeadlessDialogPanel } from '@headlessui/react';
import { useThemedComponent } from '../../../theme';

export const DialogPanel = ({ children, ...props }) => {
  const { className, style } = useThemedComponent('DialogPanel');

  return (
    <HeadlessDialogPanel className={className} style={style} {...props}>
      {children}
    </HeadlessDialogPanel>
  );
};
