import React, { useState } from "react";

import { useRevertScheduledSubscriptionCancellation } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';

export const RevertScheduledCancellation = ({ subscription }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    scheduledSubscriptionCancellationReverting,
    revertScheduledSubscriptionCancellationError,
    revertScheduledSubscriptionCancellation
  } = useRevertScheduledSubscriptionCancellation({
    id: subscription.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canRevertScheduledCancellation = subscription.canRevertScheduledCancellation;

  return (
    <>
      <Button
        disabled={!canRevertScheduledCancellation || scheduledSubscriptionCancellationReverting}
        onClick={() => { setOpen(true) }}
      >
        Turn on auto-renewal
      </Button>

      <Dialog
        open={open}
        title="Turn on auto-renewal"
        description="Want your membership to automatically renew at the end of the current season?"
        actions={[
          {
            label: "No, don't turn on",
            disabled: scheduledSubscriptionCancellationReverting,
            onClick: closeDialog
          },
          {
            label: 'Yes, turn on auto-renewal',
            disabled: scheduledSubscriptionCancellationReverting,
            loading: scheduledSubscriptionCancellationReverting,
            onClick: revertScheduledSubscriptionCancellation
          }
        ]}
        onClose={closeDialog}
      >
        {revertScheduledSubscriptionCancellationError && (
          <Banner tone="error" title="Error">
            {revertScheduledSubscriptionCancellationError.message}
          </Banner>
        )}
        <p>
          Your membership will automatically renew next season.
        </p>
      </Dialog>
    </>
  );
};
