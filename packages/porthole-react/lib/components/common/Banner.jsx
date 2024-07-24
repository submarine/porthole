import React from "react";

export const Banner = ({ tone, title, children }) => {
  return (
    <div className={tone}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
