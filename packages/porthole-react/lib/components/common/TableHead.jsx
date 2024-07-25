import React from "react";

export const TableHead = ({ children, ...props }) => {
  return (
    <thead {...props}>
      {children}
    </thead>
  );
};
