import React from 'react';

import { Description as HeadlessDialogDescription } from '@headlessui/react';
import { useThemedComponent } from '../../../theme';

export const DialogDescription = ({ description, ...props }) => {
  const { className, style } = useThemedComponent('DialogDescription');

  return (
    <HeadlessDialogDescription className={className} style={style} {...props}>
      {description}
    </HeadlessDialogDescription>
  );
};
