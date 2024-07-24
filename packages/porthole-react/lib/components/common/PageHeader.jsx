import React from "react";

export const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <div>
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
