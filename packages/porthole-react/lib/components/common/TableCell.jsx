import React from "react";

export const TableCell = ({ children, ...props }) => {
  return (
    <td {...props}>
      {children}
    </td>
  );
};
