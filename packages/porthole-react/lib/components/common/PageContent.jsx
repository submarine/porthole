import React from "react";

export const PageContent = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
