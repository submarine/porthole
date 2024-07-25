import React from 'react';

export const PaymentMethod = ({ paymentMethod }) => {
  return (
    <span>
      {paymentMethod.description}
    </span>
  );
};
