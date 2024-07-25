import React from 'react';

export const DialogPanel = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
