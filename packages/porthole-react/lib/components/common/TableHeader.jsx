import React from "react";

export const TableHeader = ({ children, ...props }) => {
  return (
    <th {...props}>
      {children}
    </th>
  );
};
