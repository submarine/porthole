import React from "react";

import { Link } from './Link';
import { Text } from './Text';
import { useThemedComponent } from '../../theme';

export const PageHeader = ({ title, breadcrumbs, ...props }) => {
  const { className, style } = useThemedComponent('PageHeader');

  return (
    <header className={className} style={style} {...props}>
      <Text as="h1">{title}</Text>
      {breadcrumbs.map(breadcrumb => {
        return (
          <Link key={breadcrumb.title} href={breadcrumb.href} external={breadcrumb.external}>
            {breadcrumb.title}
          </Link>
        )
      })}
    </header>
  );
};
