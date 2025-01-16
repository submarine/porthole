import React, { useState } from "react";

import { Downgrade } from "./Downgrade.jsx";
import { Upgrade } from "./Upgrade.jsx";

export const UpgradeDowngrade = ({ subscription, daysUntilNextBillingAt, isAnnualSubscription, withinCommitmentPeriod, timeRemainingInCommitmentPeriod, upgradeDowngradeOptions, upgradeDowngradeOptionsLoading, upgradeDowngradeOptionsError, cancelOrDowngradeAt }) => {
  const triggerMembershipUpdated = () => {
    const event = new Event('membership.updated');
    document && document.dispatchEvent(event);
  }

  if(!upgradeDowngradeOptions || upgradeDowngradeOptionsLoading || upgradeDowngradeOptionsError) {
    return null
  }

  return (
    <>
      {upgradeDowngradeOptions.map(upgradeDowngradeOption => upgradeDowngradeOption.current ? null : (upgradeDowngradeOption.isUpgrade ? (
        <Upgrade
          subscription={subscription}
          upgradeDowngradeOption={upgradeDowngradeOption}
          triggerMembershipUpdated={triggerMembershipUpdated}
          withinCommitmentPeriod={withinCommitmentPeriod}
          timeRemainingInCommitmentPeriod={timeRemainingInCommitmentPeriod}
          isAnnualSubscription={isAnnualSubscription}
          daysUntilNextBillingAt={daysUntilNextBillingAt}
        />
      ) : (
        <Downgrade
          subscription={subscription}
          withinCommitmentPeriod={withinCommitmentPeriod}
          timeRemainingInCommitmentPeriod={timeRemainingInCommitmentPeriod}
          upgradeDowngradeOption={upgradeDowngradeOption}
          triggerMembershipUpdated={triggerMembershipUpdated}
          cancelOrDowngradeAt={cancelOrDowngradeAt}
        />
      )))}
    </>
  )
};
