import React from 'react';

export const DialogTitle = ({ title, ...props }) => {
  return (
    <div {...props}>
      {title}
    </div>
  );
};
