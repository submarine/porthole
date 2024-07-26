import React, { useState } from "react";

import { useUpdateSubscription } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';
import { EditSubscriptionOrderDialogContent } from './EditSubscriptionOrderDialogContent';

export const EditSubscriptionOrder = ({ subscription, subscriptionOrder }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    updateSubscription,
    subscriptionUpdating,
    updateSubscriptionError
  } = useUpdateSubscription({
    id: subscription.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canEditSubscriptionOrder = subscriptionOrder?.canUpdateLines && !open;

  const handleSubscriptionUpdate = () => {
    const lines = [];
    updateSubscription({
      lines
    });
  };

  return (
    <>
      <Button
        disabled={!canEditSubscriptionOrder || subscriptionUpdating}
        onClick={() => { setOpen(true) }}
      >
        Add or edit subscription products
      </Button>

      <Dialog
        open={open}
        title="Add or edit subscription products"
        actions={[
          {
            label: 'Cancel',
            disabled: subscriptionUpdating,
            onClick: closeDialog
          },
          {
            label: 'Save changes',
            disabled: subscriptionUpdating,
            loading: subscriptionUpdating,
            onClick: handleSubscriptionUpdate
          }
        ]}
        onClose={closeDialog}
      >
        {updateSubscriptionError && (
          <Banner tone="error" title="Error">
            {updateSubscriptionError.message}
          </Banner>
        )}
        {open && (
          <EditSubscriptionOrderDialogContent
            subscription={subscription}
            subscriptionOrder={subscriptionOrder}
          />
        )}
      </Dialog>
    </>
  );
};
