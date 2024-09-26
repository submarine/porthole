import React, { useState } from 'react';

import { useSendPaymentMethodUpdateEmail } from '../../../../hooks';

import { Banner, Button, Dialog } from '../../../common';

export const UpdatePaymentMethod = ({ paymentMethod }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    sendPaymentMethodUpdateEmail,
    paymentMethodSendingUpdateEmail,
    sendPaymentMethodUpdateEmailError
  } = useSendPaymentMethodUpdateEmail({
    id: paymentMethod?.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canSendPaymentMethodUpdateEmail = true;

  return (
    <>
      <Button
        disabled={!canSendPaymentMethodUpdateEmail || paymentMethodSendingUpdateEmail}
        onClick={() => { setOpen(true) }}
      >
        Update payment method
      </Button>

      <Dialog
        open={open}
        title="Update payment method"
        description="Need to update your payment method?"
        actions={[
          {
            label: 'Cancel',
            disabled: paymentMethodSendingUpdateEmail,
            onClick: closeDialog
          },
          {
            label: 'Request link',
            disabled: paymentMethodSendingUpdateEmail,
            loading: paymentMethodSendingUpdateEmail,
            onClick: sendPaymentMethodUpdateEmail
          }
        ]}
        onClose={closeDialog}
      >
        {sendPaymentMethodUpdateEmailError && (
          <Banner tone="error" title="Error">
            {sendPaymentMethodUpdateEmailError.message}
          </Banner>
        )}
        <p>
          An email will be sent to your verified email address containing a link to securely update your payment method.
        </p>
      </Dialog>
    </>
  );
};
