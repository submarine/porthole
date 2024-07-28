import React from 'react';

import { useThemedComponent } from '../../theme';

export const PaymentMethod = ({ paymentMethod }) => {
  const { className, style } = useThemedComponent('PaymentMethod');

  return (
    <span className={className} style={style}>
      {paymentMethod.description}
    </span>
  );
};
