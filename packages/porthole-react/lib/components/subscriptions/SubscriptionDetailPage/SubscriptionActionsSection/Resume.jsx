import React, { useState } from "react";

import { useResumeSubscription } from '../../../../hooks';
import { Banner, Button, Dialog } from '../../../common';

export const Resume = ({ subscription }) => {
  const [open, setOpen] = useState(false);

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

  const canResumeSubscription = subscription.isPaused;

  return (
    <>
      <Button
        disabled={!canResumeSubscription || subscriptionResuming}
        onClick={() => { setOpen(true) }}
      >
        Resume
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
            onClick: resumeSubscription
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
      </Dialog>
    </>
  );
};
