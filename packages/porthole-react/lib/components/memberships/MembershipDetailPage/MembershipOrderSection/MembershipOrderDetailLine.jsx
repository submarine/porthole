import React from 'react';

import { Image, Money, TableCell, TableRow } from '../../../common';

export const MembershipOrderDetailLine = ({ subscriptionOrderLine }) => {
  return (
    <tr className="flex flex-wrap border-t border-b-0 border-grey-200 lg:first:border-t-0 lg:table-row">
      <td className="flex flex-wrap text-sm tracking-default py-4 lg:table-cell lg:py-5 lg-max:w-full" data-label="Product">
        {subscriptionOrderLine.productVariant.title}
      </td>
      <td className="flex justify-between align-top text-sm tracking-default lg:py-4 lg-max:w-full lg:table-cell lg:text-base before:content-[attr(data-label)] before:block before:text-grey-900 before:text-sm before:font-bold before:tracking-default lg:before:hidden lg:pb-4 text-grey-900" data-label="Price">
        <Money money={subscriptionOrderLine.unitPriceAfterDiscounts} />
      </td>
      <td className="flex justify-between align-top text-sm tracking-default lg:py-4 lg-max:w-full lg:table-cell lg:text-base before:content-[attr(data-label)] before:block before:text-grey-900 before:text-sm before:font-bold before:tracking-default lg:before:hidden lg:pb-4 text-center before:text-center" data-label="Quantity">
        {subscriptionOrderLine.quantity}
      </td>
      <td className="flex justify-between align-top text-sm tracking-default lg:py-4 lg-max:w-full lg:table-cell lg:text-base before:content-[attr(data-label)] before:block before:text-grey-900 before:text-sm before:font-bold before:tracking-default lg:before:hidden lg:pr-4 pb-4 text-right before:text-right text-grey-900 lg:font-medium" data-label="Total">
        <Money money={subscriptionOrderLine.linePriceAfterDiscounts} />
      </td>
    </tr>
  );
}
