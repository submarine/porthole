import { useMutation } from '@apollo/client';

import { SEND_PAYMENT_METHOD_UPDATE_EMAIL } from '@submarine/porthole-core';

export const useSendPaymentMethodUpdateEmail = ({ id, options = {} }) => {
  const [
    paymentMethodSendUpdateEmail,
    {
      loading: paymentMethodSendingUpdateEmail,
      error: sendPaymentMethodUpdateEmailError
    }
  ] = useMutation(SEND_PAYMENT_METHOD_UPDATE_EMAIL, options);

  const sendPaymentMethodUpdateEmail = () => {
    paymentMethodSendUpdateEmail({
      variables: {
        input: {
          id: `gid://submarine/PaymentMethod/${id}`
        }
      }
    });
  };

  return {
    paymentMethodSendingUpdateEmail,
    sendPaymentMethodUpdateEmailError,
    sendPaymentMethodUpdateEmail
  };
};
