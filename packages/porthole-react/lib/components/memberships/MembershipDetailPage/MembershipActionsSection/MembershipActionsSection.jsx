import React from 'react';
import { DateTime } from 'luxon';

import { Date, InlineStack, PaymentMethod, Section, SectionContent } from '../../../common';

import { Process } from './Process';
import { UpdatePaymentMethod } from "../MembershipPaymentSection/index.js";
import { UpgradeDowngrade } from "./UpgradeDowngrade.jsx";
import { Cancel } from "./Cancel.jsx";
import { RevertScheduledCancellation } from "./RevertScheduledCancellation.jsx";
import { useUpgradeDowngradeOptions } from "./useUpgradeDowngradeOptions.js";
import { RevertDowngradeRequest } from "./RevertDowngradeRequest.jsx";

const MINIMUM_MONTHS = 12;

export const MembershipActionsSection = ({ subscription }) => {
  const now = DateTime.now();

  const isAnnualSubscription = subscription.subscriptionPlan.name.includes('annually');
  const isMonthlySubscription = !isAnnualSubscription;

  const subscriptionStartedAt = DateTime.fromISO(subscription.createdAt);
  const subscriptionCommitmentEndsAt = subscriptionStartedAt.plus({ months: MINIMUM_MONTHS }).minus({ days: 1 });

  const nextBillingAt = DateTime.fromISO(subscription.nextBillingAt);
  const daysUntilNextBillingAt = parseInt(nextBillingAt.diff(DateTime.now(), 'days').toObject().days);

  const withinCommitmentPeriod = nextBillingAt < subscriptionCommitmentEndsAt;

  let timeRemainingInCommitmentPeriod = null;
  if (withinCommitmentPeriod) {
    const timeRemainingInCommitmentPeriodDiff = subscriptionCommitmentEndsAt.diff(now, ['months', 'days']).toObject();

    timeRemainingInCommitmentPeriod = {
      months: parseInt(timeRemainingInCommitmentPeriodDiff.months),
      days: parseInt(timeRemainingInCommitmentPeriodDiff.days)
    }
  } else {
    timeRemainingInCommitmentPeriod = {
      months: 0,
      days: 0
    }
  }

  console.log('timeRemainingInCommitmentPeriod', timeRemainingInCommitmentPeriod);

  const cancelOrDowngradeAt = (withinCommitmentPeriod ? subscriptionCommitmentEndsAt : nextBillingAt.minus({ days: 1 }));

  const {
    upgradeDowngradeOptions,
    upgradeDowngradeOptionsLoading,
    upgradeDowngradeOptionsError
  } = useUpgradeDowngradeOptions({
    id: subscription.id
  });

  let downgradeRequest = null;
  if (!!subscription.customAttributesHash._downgrade_request_status) {
    downgradeRequest = {
      downgradeAt: subscription.customAttributesHash._downgrade_request_downgrade_at,
      status: subscription.customAttributesHash._downgrade_request_status,
      variantId: subscription.customAttributesHash._downgrade_request_variant_id
    }
  }

  const downgradeRequestIsPending = downgradeRequest && downgradeRequest.status === 'pending';
  const canUpgradeOrDowngrade = subscription.isActive && !subscription.isPendingCancellation && !downgradeRequestIsPending;
  const canRevertDowngradeRequest = subscription.isActive && !subscription.isPendingCancellation && downgradeRequestIsPending;

  return (
    <>
      <div className="w-full py-6 border-b border-grey-300">
        <h3 className="mb-2.5 text-lg font-medium text-grey-900">Payment method</h3>
        <div className="mb-4">
          <PaymentMethod paymentMethod={subscription.paymentMethod}/>
        </div>
        {subscription.canUpdatePaymentMethod && <UpdatePaymentMethod paymentMethod={subscription.paymentMethod}/>}
      </div>

      <div className="w-full pt-6">
        <h3 className="mb-2.5 text-lg font-medium text-grey-900">Manage membership</h3>

        {subscription.isActive && subscription.isPendingCancellation && (
          <p className="mb-4">
            <span>You have <strong>Paid</strong> access until <Date dateTime={subscription.cancelAt}/>, when you will be downgraded to Free. You will continue to have access to your current benefits until then.</span>
          </p>
        )}

        {!subscription.isPendingCancellation && canRevertDowngradeRequest && (
          <p className="mb-4">
            <span>You have <strong>Premium</strong> access until <Date dateTime={downgradeRequest.downgradeAt}/>, when you will be downgraded to Standard. You will continue to have access to your Premium benefits until then.</span>
          </p>
        )}

        <InlineStack wrap={true}>
          {canUpgradeOrDowngrade && <UpgradeDowngrade
            subscription={subscription}
            isAnnualSubscription={isAnnualSubscription}
            withinCommitmentPeriod={withinCommitmentPeriod}
            timeRemainingInCommitmentPeriod={timeRemainingInCommitmentPeriod}
            upgradeDowngradeOptions={upgradeDowngradeOptions}
            upgradeDowngradeOptionsLoading={upgradeDowngradeOptionsLoading}
            upgradeDowngradeOptionsError={upgradeDowngradeOptionsError}
            cancelOrDowngradeAt={cancelOrDowngradeAt}
            daysUntilNextBillingAt={daysUntilNextBillingAt}
          />}
          {canRevertDowngradeRequest && <RevertDowngradeRequest
            subscription={subscription}
            downgradeRequest={downgradeRequest}
          />}
        </InlineStack>

        <InlineStack wrap={true}>
          {subscription.canCancel && !subscription.isPendingCancellation && (
            <Cancel
              subscription={subscription}
              withinCommitmentPeriod={withinCommitmentPeriod}
              timeRemainingInCommitmentPeriod={timeRemainingInCommitmentPeriod}
              cancelOrDowngradeAt={cancelOrDowngradeAt}
            />
          )}
          {subscription.canRevertScheduledCancellation && (
            <RevertScheduledCancellation
              subscription={subscription}
            />
          )}
        </InlineStack>
      </div>
    </>
  );
}
