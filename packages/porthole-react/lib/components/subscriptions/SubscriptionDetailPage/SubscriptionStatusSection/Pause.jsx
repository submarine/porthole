import React, { useState } from "react";

import { usePauseSubscription } from '../../../../hooks/index.js';
import { Banner, Button, Dialog } from '../../../common/index.js';

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

  const canPauseSubscription = subscription.canPause;

  return (
    <>
      <Button
        disabled={!canPauseSubscription || subscriptionPausing}
        onClick={() => { setOpen(true) }}
      >
        Pause subscription
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
