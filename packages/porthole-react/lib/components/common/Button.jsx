import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

import { useThemedComponent } from '../../theme';

export const Button = ({ disabled, loading, variant, tone, children, ...props }) => {
  const { className, style } = useThemedComponent('Button', {
    disabled, loading, variant, tone
  });

  return (
    <HeadlessButton className={className} style={style} disabled={disabled} {...props}>
      {children}
    </HeadlessButton>
  );
};
