import React from "react";

export const TableFooter = ({ children, ...props }) => {
  return (
    <tfoot {...props}>
      {children}
    </tfoot>
  );
};
