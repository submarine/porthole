import React, { useState } from 'react';

import { useProcessSubscriptionOrder } from '../../../../hooks';

import { Address, Banner, Button, Dialog } from '../../../common';

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

  return (
    <>
      <Button
        disabled={!canProcessSubscriptionOrder || subscriptionOrderProcessing}
        onClick={() => { setOpen(true) }}
        size="micro"
      >
        Process now
      </Button>

      <Dialog
        open={open}
        title="Process now"
        description="Need your next order as soon as possible?"
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
        <p>
          No problems - confirm below and we'll process your order straight away. This order will be delivered to:
        </p>
        <Address address={subscription.deliveryMethod.address} />
      </Dialog>
    </>
  );
};
