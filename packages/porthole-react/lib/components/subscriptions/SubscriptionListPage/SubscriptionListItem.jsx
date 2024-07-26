import React from 'react';

import { Link } from 'react-router-dom';

import { Date, Image, TableRow, TableCell, Money } from "../../common";

export const SubscriptionListItem = ({ subscription }) => {
  return (
    <TableRow>
      <TableCell>
        <Link to={`/subscriptions/${subscription.id}`}>
          <Image
            src={subscription.imageUrls[0]}
            alt={subscription.identifier}
            width={64}
          />
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/subscriptions/${subscription.id}`}>
          {subscription.identifier}

        </Link><br />
        <small>{subscription.lines.length} item{subscription.lines.length === 1 ? '' : 's'}</small>
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
