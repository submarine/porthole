import React from 'react';

import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../common';
import { MembershipOrderDetailLine } from './MembershipOrderDetailLine';

export const MembershipOrderDetail = ({ subscription, subscriptionOrder }) => {
  return (
    <table className="w-full">
      <thead className="hidden lg:table-header-group">
        <tr>
          <td className="hidden lg:table-cell py-2 lg:py-4 text-sm text-white font-bold tracking-default bg-brand-marine pl-4 rounded-l">
            Product
          </td>
          <td className="hidden lg:table-cell py-2 lg:py-4 text-sm text-white font-bold tracking-default bg-brand-marine lg:lg:w-[calc(100/884*100%)]">
            Price
          </td>
          <td className="hidden lg:table-cell py-2 lg:py-4 text-sm text-white font-bold tracking-default bg-brand-marine text-center lg:lg:w-[calc(100/884*100%)]">
            Quantity
          </td>
          <td className="hidden lg:table-cell py-2 lg:py-4 text-sm text-white font-bold tracking-default bg-brand-marine pr-4 text-right lg:w-[calc(100/884*100%)] rounded-r">
            Total
          </td>
        </tr>
      </thead>
      <tbody>
        {subscriptionOrder.lines.map(subscriptionOrderLine => {
          return (
            <MembershipOrderDetailLine
              key={subscriptionOrderLine.id}
              subscriptionOrderLine={subscriptionOrderLine}
            />
          );
        })}
      </tbody>
    </table>
  );
}
