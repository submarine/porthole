import React, { useState } from "react";

import { useSetSubscriptionSchedule } from '../../../../hooks';

import { Banner, Button, Dialog, Input } from '../../../common';

export const SetNextDelivery = ({ subscription }) => {
  const [open, setOpen] = useState(false);
  const [nextDeliveryDate, setNextDeliveryDate] = useState(subscription.nextDeliveryAt?.slice(0, 10));

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    setSubscriptionSchedule,
    settingSubscriptionSchedule,
    setSubscriptionScheduleError
  } = useSetSubscriptionSchedule({
    id: subscription.id,
    options: {
      onCompleted: closeDialog
    }
  });

  const canSetSubscriptionSchedule = !subscription.isCancelled;

  const handleSetSubscriptionSchedule = () => {
    const updatedNextDeliveryAt = `${nextDeliveryDate}${subscription.nextDeliveryAt?.slice(10)}`;
    setSubscriptionSchedule({
      nextDeliveryAt: updatedNextDeliveryAt,
      subscriptionAnchorId: subscription.subscriptionAnchor.gid,
      subscriptionPlanId: subscription.subscriptionPlan.gid
    });
  };

  return (
    <>
      <Button
        disabled={!canSetSubscriptionSchedule || settingSubscriptionSchedule}
        onClick={() => setOpen(true)}
        variant="secondary"
        size="micro"
      >
        Change next order date
      </Button>

      <Dialog
        open={open}
        title="Change next order date"
        description="When would you like your next order to be processed?"
        actions={[
          {
            label: 'Cancel',
            disabled: settingSubscriptionSchedule,
            onClick: closeDialog
          },
          {
            label: 'Confirm',
            disabled: settingSubscriptionSchedule,
            loading: settingSubscriptionSchedule,
            onClick: handleSetSubscriptionSchedule
          }
        ]}
        onClose={closeDialog}
      >
        {setSubscriptionScheduleError && (
          <Banner tone="error" title="Error">
            {setSubscriptionScheduleError.message}
          </Banner>
        )}
        <p>
          Your next order will be rescheduled to the specified time.
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
