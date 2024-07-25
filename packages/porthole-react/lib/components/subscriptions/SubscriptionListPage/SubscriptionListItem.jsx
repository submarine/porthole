import React from 'react';

import { Link } from 'react-router-dom';

import { Date, TableRow, TableCell, Money } from "../../common";

export const SubscriptionListItem = ({ subscription }) => {
  return (
    <TableRow>
      <TableCell>
        image
      </TableCell>
      <TableCell>
        <Link to={`/subscriptions/${subscription.id}`}>
          {subscription.identifier}
        </Link>
      </TableCell>
      <TableCell>
        {subscription.subscriptionPlan.frequency.title}
      </TableCell>
      <TableCell>
        {subscription.nextScheduledOrder ? (
          <>
            <Date dateTime={subscription.nextScheduledOrder.expectedBillingAt} /> for <Money money={subscription.nextScheduledOrder.totalPrice} />
          </>
        ) : (
          <span>-</span>
        )}
      </TableCell>
      <TableCell>
        {subscription.status}
      </TableCell>
    </TableRow>
  )
}
