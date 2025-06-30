import React, { useState } from "react";

import { useCancelSubscription } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';

import { DateTime } from "luxon";

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

  const today = DateTime.now();
  let nextCancelAt = DateTime.local(today.year, 7, 31);
  if (nextCancelAt <= today) {
    nextCancelAt = nextCancelAt.plus({ years: 1 });
  }

  return (
    <>
      <Button
        disabled={!canCancelSubscription || subscriptionCancelling}
        onClick={() => { setOpen(true) }}
      >
        Cancel auto-renewal
      </Button>

      <Dialog
        open={open}
        title="Cancel auto-renewal"
        description="Don't want your membership to automatically renew at the end of the current season?"
        actions={[
          {
            label: "No, don't cancel",
            disabled: subscriptionCancelling,
            onClick: closeDialog
          },
          {
            label: 'Yes, cancel auto-renewal',
            disabled: subscriptionCancelling,
            loading: subscriptionCancelling,
            onClick: () => {
              cancelSubscription({
                cancelAt: `${nextCancelAt.toISODate()}T00:00:00Z`
              })
            }
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
          Any remaining payments for this season will continue to be taken for your membership to be valid, but your membership will not automatically renew for the next season.
        </p>
      </Dialog>
    </>
  );
};
