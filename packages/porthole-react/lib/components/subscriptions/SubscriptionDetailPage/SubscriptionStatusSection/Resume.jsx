import React, { useState } from "react";

import { useResumeSubscription } from '../../../../hooks/index.js';
import {Banner, Button, Dialog, Input} from '../../../common/index.js';

export const Resume = ({ subscription }) => {
  const [open, setOpen] = useState(false);
  const [nextDeliveryDate, setNextDeliveryDate] = useState(subscription.nextDeliveryAt.slice(0, 10));

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    resumeSubscription,
    subscriptionResuming,
    resumeSubscriptionError
  } = useResumeSubscription({
    id: subscription.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canResumeSubscription = subscription.canResume;

  const handleResume = () => {
    const updatedNextDeliveryDate = `${nextDeliveryDate}${subscription.nextDeliveryAt.slice(10)}`;
    resumeSubscription({
      nextDeliveryDate: updatedNextDeliveryDate
    });
  };

  return (
    <>
      <Button
        disabled={!canResumeSubscription || subscriptionResuming}
        onClick={() => { setOpen(true) }}
      >
        Resume subscription
      </Button>

      <Dialog
        open={open}
        title="Resume subscription"
        description="When would you like to resume this subscription?"
        actions={[
          {
            label: 'Cancel',
            disabled: subscriptionResuming,
            onClick: closeDialog
          },
          {
            label: 'Yes, resume',
            disabled: subscriptionResuming,
            loading: subscriptionResuming,
            onClick: handleResume
          }
        ]}
        onClose={closeDialog}
      >
        {resumeSubscriptionError && (
          <Banner tone="error" title="Error">
            {resumeSubscriptionError.message}
          </Banner>
        )}
        <p>
          Your next order will be processed at the specified time.
        </p>
        <Input
          type="date"
          value={nextDeliveryDate}
          onChange={e => setNextDeliveryDate(e.target.value)}
        />
      </Dialog>
    </>
  );
};
