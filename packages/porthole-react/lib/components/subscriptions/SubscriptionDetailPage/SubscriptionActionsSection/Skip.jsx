import React, { useState } from "react";

import { useSkipSubscriptionOrder } from '../../../../hooks';

import { Banner, Button, Date, Dialog, Time } from "../../../common";

export const Skip = ({ subscription }) => {
  const [open, setOpen] = useState(false);

  const nextScheduledOrder = subscription.nextScheduledOrder;

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    skipSubscriptionOrder,
    subscriptionOrderSkipping,
    skipSubscriptionOrderError
  } = useSkipSubscriptionOrder({
    id: nextScheduledOrder?.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canSkipSubscriptionOrder = subscription.isActive && nextScheduledOrder && nextScheduledOrder?.isScheduled;

  return (
    <>
      <Button
        disabled={!canSkipSubscriptionOrder || subscriptionOrderSkipping}
        onClick={() => { setOpen(true) }}
        variant="secondary"
        size="micro"
      >
        Skip next order
      </Button>

      <Dialog
        open={open}
        title="Skip next order"
        description="Skip your next order?"
        actions={[
          {
            label: 'Cancel',
            disabled: subscriptionOrderSkipping,
            onClick: closeDialog
          },
          {
            label: 'Yes, skip',
            disabled: subscriptionOrderSkipping,
            loading: subscriptionOrderSkipping,
            onClick: skipSubscriptionOrder
          }
        ]}
        onClose={closeDialog}
      >
        {skipSubscriptionOrderError && (
          <Banner tone="error" title="Error">
            {skipSubscriptionOrderError.message}
          </Banner>
        )}
        <p>
          Would you like to skip your next order, scheduled to be processed on <Date dateTime={nextScheduledOrder?.expectedBillingAt} /> at <Time dateTime={nextScheduledOrder?.expectedBillingAt} />?
        </p>
        <p>
          Your next order after that is scheduled to be processed on <Date dateTime={nextScheduledOrder?.nextSubscriptionOrder.expectedBillingAt} /> at <Time dateTime={nextScheduledOrder?.nextSubscriptionOrder?.expectedBillingAt} />.
        </p>
      </Dialog>
    </>
  );
};
