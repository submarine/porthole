import React from "react";

import { Link } from 'react-router-dom';

export const PageHeader = ({ title, breadcrumbs, ...props }) => {
  return (
    <header {...props}>
      <h1>{title}</h1>
      {breadcrumbs.map(breadcrumb => {
        return (
          <Link key={breadcrumb.href} to={breadcrumb.href}>
            {breadcrumb.title}
          </Link>
        )
      })}
    </header>
  );
};
