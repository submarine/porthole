import React from "react";
import { Link } from 'react-router-dom';

import { useThemedComponent } from '../../theme';

export const PageHeader = ({ title, breadcrumbs, ...props }) => {
  const { className, style } = useThemedComponent('PageHeader');

  return (
    <header className={className} style={style} {...props}>
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
