import React, { useState } from "react";

import { useUpdateSubscription } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';
import { EditSubscriptionOrderDialogContent } from './EditSubscriptionOrderDialogContent';

export const EditSubscriptionOrder = ({ subscription, subscriptionOrder }) => {
  const [open, setOpen] = useState(false);
  const [editableLines, setEditableLines] = useState(subscriptionOrder.lines.map(line => line.toEditableSubscriptionLine()));

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
    const lines = editableLines.map(editableLine => ({
      productVariantId: `gid://external/ProductVariant/${editableLine.productVariant.externalId}`,
      quantity: editableLine.quantity
    }));

    updateSubscription({
      lines
    });
  };

  const addEditableLine = (editableLineToAdd) => {
    setEditableLines([
      ...editableLines,
      editableLineToAdd
    ]);
  }

  const removeEditableLine = (editableLineToRemove) => {
    const index = editableLines.findIndex((editableLine) => editableLine.id === editableLineToRemove.id);

    setEditableLines([
      ...editableLines.slice(0, index),
      ...editableLines.slice(index + 1)
    ]);
  }

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
            subscriptionOrder={subscriptionOrder}
            editableLines={editableLines}
            addEditableLine={addEditableLine}
            removeEditableLine={removeEditableLine}
          />
        )}
      </Dialog>
    </>
  );
};
