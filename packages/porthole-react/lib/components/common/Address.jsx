import React from "react";

export const Address = ({ address, ...props }) => {
  return (
    <address {...props}>
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
