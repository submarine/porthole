import React from 'react';

import { Image, Money, TableCell, TableRow } from '../../../common';

export const MembershipOrderDetailLine = ({ subscriptionOrderLine }) => {
  return (
    <TableRow>
      <TableCell align="left">
        <Image
          src={subscriptionOrderLine.imageUrl}
          alt={subscriptionOrderLine.productVariant.title}
          width={64}
        />
      </TableCell>
      <TableCell align="left">
        {subscriptionOrderLine.productVariant.title}
      </TableCell>
      <TableCell align="center">
        {subscriptionOrderLine.productVariant.sku}
      </TableCell>
      <TableCell align="center">
        <Money money={subscriptionOrderLine.unitPriceAfterDiscounts} />
      </TableCell>
      <TableCell align="center">
        {subscriptionOrderLine.quantity}
      </TableCell>
      <TableCell align="right">
        <Money money={subscriptionOrderLine.linePriceAfterDiscounts} />
      </TableCell>
    </TableRow>
  );
}
