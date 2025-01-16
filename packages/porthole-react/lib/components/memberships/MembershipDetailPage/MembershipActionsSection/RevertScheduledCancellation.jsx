import React, { useState } from "react";

import { useRevertScheduledSubscriptionCancellation } from '../../../../hooks/index.js';
import {Banner, Button, Date, Dialog} from '../../../common/index.js';

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
        Revert downgrade request
      </Button>

      <Dialog
        open={open}
        title="Revert downgrade request"
        actions={[
          {
            label: "No, don't revert",
            disabled: scheduledSubscriptionCancellationReverting,
            onClick: closeDialog
          },
          {
            label: 'Yes, revert downgrade request',
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
          Your membership is scheduled to be downgraded at your request. You can revert this request and maintain your current subscription.
        </p>
      </Dialog>
    </>
  );
};
