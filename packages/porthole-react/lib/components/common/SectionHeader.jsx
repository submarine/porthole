import React from "react";

export const SectionHeader = ({ title, ...props }) => {
  return (
    <div {...props}>
      <h3>{title}</h3>
    </div>
  );
};
