import React from 'react';

export const DialogDescription = ({ description, ...props }) => {
  return (
    <div {...props}>
      {description}
    </div>
  );
};
