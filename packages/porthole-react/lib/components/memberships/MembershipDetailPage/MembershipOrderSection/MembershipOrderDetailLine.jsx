import React from 'react';

import { Image, Money, TableCell, TableRow } from '../../../common';
import { clsx } from "clsx";

export const MembershipOrderDetailLine = ({ subscriptionOrderLine }) => {
  const className = clsx({
    'p-4 lg:p-0 grid gap-y-1 lg:gap-y-0 lg:table-row': true
  })

  return (
    <tr className={className}>
      <td data-label="Product">
        {subscriptionOrderLine.productVariant.title}
      </td>
      <td data-label="Price">
        <Money money={subscriptionOrderLine.unitPriceAfterDiscounts} />
      </td>
      <td data-label="Quantity">
        {subscriptionOrderLine.quantity}
      </td>
      <td data-label="Total">
        <Money money={subscriptionOrderLine.linePriceAfterDiscounts} />
      </td>
    </tr>
  );
}
