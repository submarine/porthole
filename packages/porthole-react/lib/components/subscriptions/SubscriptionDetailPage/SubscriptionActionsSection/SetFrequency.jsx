import React, { useState } from "react";

import { useSetSubscriptionSchedule } from '../../../../hooks';

import { Banner, Button, Dialog, Select } from '../../../common';

export const SetFrequency = ({ subscription }) => {
  const [open, setOpen] = useState(false);
  const [subscriptionAnchorId, setSubscriptionAnchorId] = useState(subscription.subscriptionAnchor.id);

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
    const subscriptionPlanId = subscription.availableSubscriptionPlans.find(
      subscriptionPlan => subscriptionPlan.anchors.some(anchor => anchor.gid === subscriptionAnchorId)
    )?.gid;

    setSubscriptionSchedule({
      nextDeliveryAt: subscription.nextDeliveryAt,
      subscriptionAnchorId,
      subscriptionPlanId
    });
  };

  return (
    <>
      <Button
        disabled={!canSetSubscriptionSchedule || settingSubscriptionSchedule}
        onClick={() => setOpen(true)}
      >
        Change frequency
      </Button>

      <Dialog
        open={open}
        title="Change frequency"
        description="How often would you like your order delivered?"
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
        <Select
          value={subscriptionAnchorId}
          onChange={e => setSubscriptionAnchorId(e.target.value)}
        >
          {subscription.availableSubscriptionPlans.flatMap(availableSubscriptionPlan => {
            return availableSubscriptionPlan.anchors.map(anchor => {
              return (
                <option key={anchor.gid} value={anchor.gid}>
                  {anchor.name}
                </option>
              );
            });
          })}
        </Select>
      </Dialog>
    </>
  );
};
