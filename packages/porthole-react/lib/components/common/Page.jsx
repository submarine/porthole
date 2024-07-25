import React from "react";

export const Page = ({ children, ...props }) => {
  return (
    <section {...props}>
      {children}
    </section>
  );
};
