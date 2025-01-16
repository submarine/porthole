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
      <td className="" data-label="Membership ID">
        <Link className="link underline" to={`/memberships/${subscription.id}`}>
          {subscription.identifier}
        </Link>
      </td>
      <td className="" data-label="Payment frequency">
        {subscription.subscriptionPlan.frequency.title}
      </td>
      <td className="" data-label="Next payment">
        {subscription.nextScheduledOrder ? (
          <>
            <Date dateTime={subscription.nextScheduledOrder.expectedBillingAt} /> for <Money money={subscription.nextScheduledOrder.totalPrice} />
          </>
        ) : (
          <span>-</span>
        )}
      </td>
      <td className="" data-label="Status">
        {subscription.status}
      </td>
    </tr>
  )
}
