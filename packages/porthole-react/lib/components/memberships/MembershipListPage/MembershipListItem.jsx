import React from 'react';

import { Link } from 'react-router-dom';

import { Badge, Date, Image, TableRow, TableCell, Text, Money } from "../../common";
import { getToneFromStatus } from '../../../utilities';

export const MembershipListItem = ({ subscription }) => {
  return (
    <TableRow>
      <TableCell>
        <Link to={`/memberships/${subscription.id}`}>
          {subscription.identifier}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/memberships/${subscription.id}`}>
          <Image
            src={subscription.imageUrls[0]}
            alt={subscription.identifier}
            width={64}
          />
        </Link>
      </TableCell>
      <TableCell>
        <Text>
          {subscription.subscriptionPlan.frequency.title}
        </Text>
        {subscription.subscriptionPlan.frequency.minTotalCycles && (
          <Text>
            {subscription.processedOrdersCount} of {subscription.subscriptionPlan.frequency.minTotalCycles}
          </Text>
        )}
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
        <Badge tone={getToneFromStatus(subscription.status)}>
          {subscription.status}
        </Badge>
      </TableCell>
    </TableRow>
  )
}
