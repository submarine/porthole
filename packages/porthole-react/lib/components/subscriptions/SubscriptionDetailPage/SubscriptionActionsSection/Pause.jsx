import React, { useState } from "react";

import { usePauseSubscription } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';

export const Pause = ({ subscription }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    pauseSubscription,
    subscriptionPausing,
    pauseSubscriptionError
  } = usePauseSubscription({
    id: subscription.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canPauseSubscription = subscription.isActive;

  return (
    <>
      <Button
        disabled={!canPauseSubscription || subscriptionPausing}
        onClick={() => { setOpen(true) }}
      >
        Pause
      </Button>

      <Dialog
        open={open}
        title="Pause subscription"
        description="Pause your subscription indefinitely?"
        actions={[
          {
            label: 'Cancel',
            disabled: subscriptionPausing,
            onClick: closeDialog
          },
          {
            label: 'Yes, pause',
            disabled: subscriptionPausing,
            loading: subscriptionPausing,
            onClick: pauseSubscription
          }
        ]}
        onClose={closeDialog}
      >
        {pauseSubscriptionError && (
          <Banner tone="error" title="Error">
            {pauseSubscriptionError.message}
          </Banner>
        )}
        <p>
          Alternatively, you can change your next order date.
        </p>
      </Dialog>
    </>
  );
};
