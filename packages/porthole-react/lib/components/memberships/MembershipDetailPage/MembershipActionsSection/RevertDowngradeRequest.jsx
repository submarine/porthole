import React, { useState } from "react";

import { useRevertRequestedSubscriptionDowngrade } from "./useRevertRequestedSubscriptionDowngrade.js";
import {Banner, Button, Date, Dialog} from '../../../common/index.js';

export const RevertDowngradeRequest = ({ subscription, downgradeRequest }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    revertSubscriptionDowngradeRequest,
    subscriptionDowngradeRequestReverting,
    revertSubscriptionDowngradeRequestError
  } = useRevertRequestedSubscriptionDowngrade({
    id: subscription.id,
    options: {
      onCompleted: () => {
        closeDialog()
      }
    }
  });

  return (
    <>
      <Button
        disabled={subscriptionDowngradeRequestReverting}
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
            disabled: subscriptionDowngradeRequestReverting,
            onClick: closeDialog
          },
          {
            label: 'Yes, revert downgrade request',
            loading:  subscriptionDowngradeRequestReverting,
            disabled: subscriptionDowngradeRequestReverting,
            onClick: () => {
              revertSubscriptionDowngradeRequest({
                currentCustomAttributesHash: subscription.customAttributesHash
              })
            }
          }
        ]}
        onClose={closeDialog}
      >
        {revertSubscriptionDowngradeRequestError && (
          <Banner tone="error" title="Error">
            {revertSubscriptionDowngradeRequestError.message}
          </Banner>
        )}
        <p>
          Your membership is scheduled to be downgraded on <Date dateTime={downgradeRequest.downgradeAt} /> at your request. You can revert this request and maintain your current subscription.
        </p>
      </Dialog>
    </>
  );
}
