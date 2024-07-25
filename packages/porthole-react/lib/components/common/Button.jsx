import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'

export const Button = ({ loading, children, ...props }) => {
  return (
    <HeadlessButton {...props}>
      {children}
    </HeadlessButton>
  );
};
