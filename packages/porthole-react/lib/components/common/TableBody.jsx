import React from "react";

export const TableBody = ({ children, ...props }) => {
  return (
    <tbody {...props}>
      {children}
    </tbody>
  );
};
