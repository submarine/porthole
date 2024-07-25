import React from "react";

export const SectionContent = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
