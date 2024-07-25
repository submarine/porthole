import React, { useState } from "react";

import { useCancelSubscription } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';

export const Cancel = ({ subscription }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    cancelSubscription,
    subscriptionCancelling,
    cancelSubscriptionError
  } = useCancelSubscription({
    id: subscription.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canCancelSubscription = subscription.canCancel;

  return (
    <>
      <Button
        disabled={!canCancelSubscription || subscriptionCancelling}
        onClick={() => { setOpen(true) }}
      >
        Cancel subscription
      </Button>

      <Dialog
        open={open}
        title="Cancel subscription"
        description="Permanently cancel your subscription?"
        actions={[
          {
            label: "No, don't cancel",
            disabled: subscriptionCancelling,
            onClick: closeDialog
          },
          {
            label: 'Yes, cancel my subscription',
            disabled: subscriptionCancelling,
            loading: subscriptionCancelling,
            onClick: cancelSubscription
          }
        ]}
        onClose={closeDialog}
      >
        {cancelSubscriptionError && (
          <Banner tone="error" title="Error">
            {cancelSubscriptionError.message}
          </Banner>
        )}
        <p>
          Alternatively, you can pause your subscription indefinitely and easily resume it at any time.
        </p>
      </Dialog>
    </>
  );
};
