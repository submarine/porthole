import React from 'react';

import { Link } from 'react-router-dom';

import { Badge, Date, Image, TableRow, TableCell, Text, Money } from "../../common";
import { getToneFromStatus } from '../../../utilities';
import {clsx} from "clsx";

export const MembershipListItem = ({ index, subscription }) => {
  const className = clsx({
    'p-4 lg:p-0 grid gap-y-1 lg:gap-y-0 lg:table-row': true,
    'bg-grey-100 lg:bg-transparent rounded lg:rounded-none': !!(index % 2)
  })

  return (
    <tr className={className}>
      <td className={`lg:py-4 flex lg:table-cell text-sm text-grey-700 tracking-default before:content-[attr(data-label)] before:block before:w-[120px] before:text-grey-900 before:text-sm before:font-bold before:mr-6 lg:before:hidden lg:pl-5 lg:rounded-l ${!!(index % 2) ? 'bg-grey-100' : ''}`}>
        <Link className="link underline" to={`/memberships/${subscription.id}`}>
          {subscription.identifier}
        </Link>
      </td>
      <td className={`lg:py-4 flex lg:table-cell text-sm text-grey-700 tracking-default before:content-[attr(data-label)] before:block before:w-[120px] before:text-grey-900 before:text-sm before:font-bold before:mr-6 lg:before:hidden ${!!(index % 2) ? 'bg-grey-100' : ''}`}>
        <Text>
          {subscription.subscriptionPlan.frequency.title}
        </Text>
      </td>
      <td className={`lg:py-4 flex lg:table-cell text-sm text-grey-700 tracking-default before:content-[attr(data-label)] before:block before:w-[120px] before:text-grey-900 before:text-sm before:font-bold before:mr-6 lg:before:hidden ${!!(index % 2) ? 'bg-grey-100' : ''}`}>
        {subscription.subscriptionPlan.frequency.minTotalCycles && (
          <Text>
            {subscription.processedOrdersCount} of {subscription.subscriptionPlan.frequency.minTotalCycles}
          </Text>
        )}
      </td>
      <td className={`lg:py-4 flex lg:table-cell text-sm text-grey-700 tracking-default before:content-[attr(data-label)] before:block before:w-[120px] before:text-grey-900 before:text-sm before:font-bold before:mr-6 lg:before:hidden ${!!(index % 2) ? 'bg-grey-100' : ''}`}>
        {subscription.nextScheduledOrder ? (
          <>
            <Date dateTime={subscription.nextScheduledOrder.expectedBillingAt} /> for <Money money={subscription.nextScheduledOrder.totalPrice} />
          </>
        ) : (
          <span>-</span>
        )}
      </td>
      <td className={`lg:py-4 flex lg:table-cell text-sm text-grey-700 tracking-default before:content-[attr(data-label)] before:block before:w-[120px] before:text-grey-900 before:text-sm before:font-bold before:mr-6 lg:before:hidden lg:text-right lg:pr-5 lg:rounded-r ${!!(index % 2) ? 'bg-grey-100' : ''}`}>
        {subscription.status}
      </td>
    </tr>
  )
}
