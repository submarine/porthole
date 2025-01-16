import React, { useState } from "react";

import { useCancelSubscription } from '../../../../hooks/index.js';
import {Banner, Button, Date, Dialog, Duration} from '../../../common/index.js';

export const Cancel = ({ subscription, withinCommitmentPeriod, timeRemainingInCommitmentPeriod, cancelOrDowngradeAt }) => {
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
        Downgrade to free
      </Button>

      <Dialog
        open={open}
        title="Downgrade membership"
        actions={[
          {
            label: "No, don't downgrade",
            disabled: subscriptionCancelling,
            onClick: closeDialog
          },
          {
            label: 'Yes, downgrade my membership',
            disabled: subscriptionCancelling,
            loading: subscriptionCancelling,
            onClick: () => {
              cancelSubscription({
                cancelAt: cancelOrDowngradeAt.toISO()
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
        {withinCommitmentPeriod ? (
          <p>
            You have <Duration months={timeRemainingInCommitmentPeriod.months} days={timeRemainingInCommitmentPeriod.days} /> remaining in your 12-month initial membership term. Your downgrade will take effect at the end of your term on <Date dateTime={cancelOrDowngradeAt.toISO()} />, and you will continue to have access to your current member benefits until then.
          </p>
        ) : (
          <p>
            Your downgrade will take effect at the end of your current billing cycle on <Date dateTime={cancelOrDowngradeAt.toISO()} />. You will continue to have access to your current member benefits until then.
          </p>
        )}
      </Dialog>
    </>
  );
};
