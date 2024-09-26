import React from 'react';

import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../common';
import { MembershipOrderDetailLine } from './MembershipOrderDetailLine';

export const MembershipOrderDetail = ({ subscription, subscriptionOrder }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader colSpan="2" align="left">Product</TableHeader>
          <TableHeader align="center">SKU</TableHeader>
          <TableHeader align="center">Price</TableHeader>
          <TableHeader align="center">Quantity</TableHeader>
          <TableHeader align="right">Total</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {subscriptionOrder.lines.map(subscriptionOrderLine => {
          return (
            <MembershipOrderDetailLine
              key={subscriptionOrderLine.id}
              subscriptionOrderLine={subscriptionOrderLine}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
