import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

export const Button = ({ children, ...props }) => {
  return (
    <HeadlessButton {...props}>
      {children}
    </HeadlessButton>
  );
};
