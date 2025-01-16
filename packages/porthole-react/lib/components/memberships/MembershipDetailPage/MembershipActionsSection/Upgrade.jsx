import React, { useState } from "react";

import { Banner, Button, Dialog, Money } from '../../../common/index.js';

export const Upgrade = ({ subscription, upgradeDowngradeOption, triggerMembershipUpdated, isAnnualSubscription, withinCommitmentPeriod, daysUntilNextBillingAt, timeRemainingInCommitmentPeriod }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const canUpgradeSubscription = subscription.isActive && !subscription.isPendingCancellation && !!upgradeDowngradeOption.upgradeProductVariantId;

  const upgradeProrataInterval = isAnnualSubscription ? 'months' : 'days';
  const upgradeProrataUnitAmount = parseFloat(upgradeDowngradeOption.upgradeProductVariantPrice);

  // calculate a minimum magnitude for the upgrade to be $1 or more
  const minimumUpgradeProrataMagnitude = Math.ceil(1.00 / upgradeProrataUnitAmount);

  // ensure upgrades cost something at a minimum
  const nominalProrataMagnitude = isAnnualSubscription ? timeRemainingInCommitmentPeriod.months : (daysUntilNextBillingAt - 1);
  const upgradeProrataMagnitude = Math.max(nominalProrataMagnitude, minimumUpgradeProrataMagnitude);

  // flag whether the minimum magnitude has come into effect
  const minimumEnforced = nominalProrataMagnitude < minimumUpgradeProrataMagnitude;

  const upgradeProrataAmount = (upgradeProrataMagnitude * upgradeProrataUnitAmount).toFixed(2);

  return (
    <>
      <Button
        disabled={!canUpgradeSubscription}
        onClick={() => { setOpen(true) }}
      >
        Upgrade to {upgradeDowngradeOption.titleClass}
      </Button>

      <Dialog
        open={open}
        title="Upgrade membership"
        actions={[
          {
            label: "No, don't upgrade",
            onClick: closeDialog
          },
          {
            label: "Yes, upgrade my membership",
            onClick: () => {
              const checkoutUrl = new URL(`${window.location.origin}/cart/add`);
              checkoutUrl.searchParams.append('id', upgradeDowngradeOption.upgradeProductVariantExternalId);
              checkoutUrl.searchParams.append('quantity', upgradeProrataMagnitude);
              checkoutUrl.searchParams.append('properties[_subscription_id]', subscription.id);
              checkoutUrl.searchParams.append('properties[_upgrade_product_variant_id]', upgradeDowngradeOption.productVariantId);
              checkoutUrl.searchParams.append('properties[_target_plan_type]', upgradeDowngradeOption.titleClass.toLowerCase());
              checkoutUrl.searchParams.append('return_to', `/checkout`);
              const upgradeUrl = new URL(`${window.location.origin}/cart/clear`);
              upgradeUrl.searchParams.append('return_to', checkoutUrl.toString().replace(checkoutUrl.origin, ''));
              window.location.href = upgradeUrl.toString();
            }
          }
        ]}
        onClose={closeDialog}
      >
        <p>
          You will be taken to checkout to finalise your upgrade to <strong>{upgradeDowngradeOption.titleClass}</strong>.
        </p>
        <p>
          You will be billed a one-time upgrade fee today of{' '}
          <Money money={{amount: upgradeProrataAmount, currency: 'AUD'}}/> {!minimumEnforced && (
            <span>
              {'('}{upgradeProrataMagnitude} {upgradeProrataInterval} &times;{' '}
              <Money money={{amount: upgradeDowngradeOption.upgradeProductVariantPrice, currency: 'AUD'}} />
              {') '}
            </span>
          )}
          for the time until your next scheduled renewal and your membership will then be billed {isAnnualSubscription ? 'every year' : 'every month'} at <Money money={upgradeDowngradeOption.price} />.
        </p>
      </Dialog>
    </>
  );
}
