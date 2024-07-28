import React from "react";

import { useThemedComponent } from '../../theme';

export const Address = ({ address }) => {
  const { className, style } = useThemedComponent('Address');

  return (
    <address className={className} style={style}>
      {address.fullName}<br />
      {address.parse().map((line, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {line}<br />
        </React.Fragment>
      ))}
    </address>
  );
};
