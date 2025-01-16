import React, { useState } from "react";

import { useDowngradeSubscription } from "./useDowngradeSubscription.js";
import {Banner, Button, Date, Dialog, Duration} from '../../../common/index.js';

export const Downgrade = ({ subscription, withinCommitmentPeriod, timeRemainingInCommitmentPeriod, upgradeDowngradeOption, triggerMembershipUpdated, cancelOrDowngradeAt }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const {
    downgradeSubscription,
    subscriptionDowngrading,
    downgradeSubscriptionError
  } = useDowngradeSubscription({
    id: subscription.id,
    options: {
      onCompleted: () => {
        closeDialog()
        triggerMembershipUpdated()
      }
    }
  });

  const canDowngradeSubscription = subscription.isActive && !subscription.isPendingCancellation;

  return (
    <>
      <Button
        disabled={!canDowngradeSubscription || subscriptionDowngrading}
        onClick={() => { setOpen(true) }}
      >
        Downgrade to {upgradeDowngradeOption.titleClass}
      </Button>

      <Dialog
        open={open}
        title="Downgrade membership"
        actions={[
          {
            label: "No, don't downgrade",
            disabled: subscriptionDowngrading,
            onClick: closeDialog
          },
          {
            label: "Yes, downgrade my membership",
            loading:  subscriptionDowngrading,
            disabled: subscriptionDowngrading,
            onClick: () => {
              downgradeSubscription({
                subscriptionProductVariantId: upgradeDowngradeOption.productVariantId,
                downgradeAt: cancelOrDowngradeAt.toISO(),
                targetPlanType: upgradeDowngradeOption.titleClass.toLowerCase()
              })
            }
          }
        ]}
        onClose={closeDialog}
      >
        {downgradeSubscriptionError && (
          <Banner tone="error" title="Error">
            {downgradeSubscriptionError.message}
          </Banner>
        )}
        {withinCommitmentPeriod ? (
          <p>
            You have <Duration months={timeRemainingInCommitmentPeriod.months} days={timeRemainingInCommitmentPeriod.days} /> remaining in your 12-month initial membership term. Your downgrade will take effect at the end of your term on <Date dateTime={cancelOrDowngradeAt.toISO()} />, and you will continue to have access to your current member benefits until then.
          </p>
        ) : (
          <p>
            Your downgrade will take effect at the end of your current billing cycle on <Date dateTime={cancelOrDowngradeAt.toISO()} />. You will continue to have access to your current member benefits until then.
          </p>
        )}
      </Dialog>
    </>
  );
}
