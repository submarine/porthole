import React from 'react';

import { Link } from "react-router-dom";

import {MembershipActionsSection, Process} from './MembershipActionsSection';
import {MembershipOrderDetailLine, MembershipOrderSection} from './MembershipOrderSection';
import { MembershipOverviewSection } from './MembershipOverviewSection';
import {MembershipPaymentSection, UpdatePaymentMethod} from './MembershipPaymentSection';
import { MembershipStatusSection } from './MembershipStatusSection';
import {Date, InlineStack, PaymentMethod, Text, Time} from "../../common/index.js";
import {Cancel} from "./MembershipStatusSection/Cancel.jsx";
import {RevertScheduledCancellation} from "./MembershipStatusSection/RevertScheduledCancellation.jsx";

export const MembershipDetail = ({ subscription }) => {
  return (
    <div className="account-order-detail flex flex-col lg:flex-row justify-between gap-[60px] w-full pt-2 lg:pt-0 lg:items-start">
      <div className="order-detail__left flex flex-col flex-1 lg:max-w-[884px]">
        <Link to="/memberships" className="button-outlined flex gap-2 justify-center items-center w-full mb-8 lg:w-fit">
          <svg viewBox="0 0 24 24" className="icon w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="icon-arrow-left" d="M11.438 18.75 4.688 12l6.75-6.75M5.625 12h13.688" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>Back to Memberships</span>
        </Link>

        <div className="header flex-items-center mb-1"><h2
          className="text-xl lg:text-2xl text-grey-900 font-medium print:mx-0 print:mr-2">Membership {subscription.identifier}</h2>
        </div>

        <div className="mb-4">
          {subscription.subscriptionPlan.frequency.minTotalCycles && (
            <p className="text-sm tracking-default">
              {subscription.processedOrdersCount} of {subscription.subscriptionPlan.frequency.minTotalCycles} payments processed.
            </p>
          )}
          {subscription.isActive && subscription.nextScheduledOrder && (
            <p className="text-sm tracking-default">
              Your next payment will be processed on <Date dateTime={subscription.nextBillingAt} /> at <Time dateTime={subscription.nextBillingAt} />.
            </p>
          )}
          {subscription.isCancelled && (
            <p className="text-sm tracking-default">
              This membership was cancelled on <Date dateTime={subscription.cancelledAt} /> at <Time dateTime={subscription.cancelledAt} />.
            </p>
          )}
        </div>

        {!subscription.isCancelled && (<MembershipOrderSection
          subscription={subscription}
        />)}
      </div>
      <div className="mt-8 lg:max-w-[340px] shrink-0 w-full border-grey-200 lg:p-6 lg:mt-0 lg:border lg:rounded-lg lg:shadow-1">
        <div className="flex flex-col">
          <div className="w-full pb-6 border-b border-grey-300">
            <Process subscription={subscription} />
          </div>
          <div className="w-full py-6 border-b border-grey-300">
            <h3 className="mb-2.5 text-lg font-medium text-grey-900">Payment method</h3>
            <div className="mb-4">
              <PaymentMethod paymentMethod={subscription.paymentMethod} />
            </div>
            {subscription.canUpdatePaymentMethod && <UpdatePaymentMethod paymentMethod={subscription.paymentMethod} />}
          </div>
          <div className="w-full pt-6">
            <h3 className="mb-2.5 text-lg font-medium text-grey-900">Manage membership</h3>

            {subscription.isActive && subscription.isPendingCancellation && (<p className="mb-4">
              Auto-renewal has been turned off and your membership will be automatically cancelled on <Date dateTime={subscription.cancelAt} />.
            </p>)}

            <InlineStack wrap={true}>
              {subscription.canCancel && !subscription.isPendingCancellation && <Cancel subscription={subscription} />}
              {subscription.canRevertScheduledCancellation && <RevertScheduledCancellation subscription={subscription} />}
            </InlineStack>
          </div>
        </div>

      </div>
    </div>
  )
}
