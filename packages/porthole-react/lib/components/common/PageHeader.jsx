import React from "react";

export const PageHeader = ({ title, breadcrumbs, ...props }) => {
  return (
    <div {...props}>
      <h1>{title}</h1>
      {breadcrumbs.map(breadcrumb => {
        return (
          <a key={breadcrumb.href} href={breadcrumb.href}>
            {breadcrumb.title}
          </a>
        )
      })}
    </div>
  );
};
