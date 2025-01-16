import React, { useState } from 'react';

import { useProcessSubscriptionOrder } from '../../../../hooks';

import { Banner, Button, Dialog } from '../../../common';

export const Process = ({ subscription }) => {
  const [open, setOpen] = useState(false);

  const nextScheduledOrder = subscription.nextScheduledOrder;

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    processSubscriptionOrder,
    subscriptionOrderProcessing,
    processSubscriptionOrderError
  } = useProcessSubscriptionOrder({
    id: nextScheduledOrder?.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canProcessSubscriptionOrder = subscription.isActive && nextScheduledOrder && nextScheduledOrder.canProcess;
  const nextScheduledOrderIsFree = nextScheduledOrder && nextScheduledOrder.totalPrice.isZero;

  return (
    <>
      <Button
        className="button-outlined text-base tracking-default block js-modal-dialog-trigger"
        disabled={!canProcessSubscriptionOrder || subscriptionOrderProcessing}
        onClick={() => { setOpen(true) }}
        size="micro"
      >
        {nextScheduledOrderIsFree ? 'Process' : 'Pay'} now
      </Button>

      <Dialog
        open={open}
        title={`${nextScheduledOrderIsFree ? 'Process' : 'Pay'} now`}
        description="Want to process your next membership renewal in advance?"
        actions={[
          {
            label: 'Cancel',
            size: 'micro',
            variant: 'secondary',
            disabled: subscriptionOrderProcessing,
            onClick: closeDialog,
          },
          {
            label: 'Yes, process now',
            size: 'micro',
            disabled: subscriptionOrderProcessing,
            loading: subscriptionOrderProcessing,
            onClick: processSubscriptionOrder
          }
        ]}
        onClose={closeDialog}
      >
        {processSubscriptionOrderError && (
          <Banner tone="error" title="Error">
            {processSubscriptionOrderError.message}
          </Banner>
        )}
        {nextScheduledOrderIsFree ? (
          <>
            <p>
              No problems - as your next renewal has been prepaid under your annual plan, you won't be charged but will receive your membership benefits.
            </p>
          </>
        ) : (
          <p>
            No problems - confirm below and we'll process your renewal straight away.
          </p>
        )}
      </Dialog>
    </>
  );
};
