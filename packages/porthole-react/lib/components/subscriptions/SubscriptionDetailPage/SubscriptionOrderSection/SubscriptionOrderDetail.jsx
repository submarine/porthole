import React from 'react';

import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from '../../../common';
import { SubscriptionOrderDetailLine } from './SubscriptionOrderDetailLine';
import {EditSubscriptionOrder} from "./EditSubscriptionOrder.jsx";

export const SubscriptionOrderDetail = ({ subscription, subscriptionOrder }) => {
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
            <SubscriptionOrderDetailLine
              key={subscriptionOrderLine.id}
              subscriptionOrderLine={subscriptionOrderLine}
            />
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan="6">
            <EditSubscriptionOrder
              subscription={subscription}
              subscriptionOrder={subscriptionOrder}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
