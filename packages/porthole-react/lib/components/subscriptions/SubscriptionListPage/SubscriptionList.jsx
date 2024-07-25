import React from 'react';

import { SubscriptionListEmpty } from './SubscriptionListEmpty';
import { SubscriptionListItem } from './SubscriptionListItem';

import { Table, TableHead, TableRow, TableHeader, TableBody } from '../../common';

export const SubscriptionList = ({ subscriptionCollection }) => {
  if (subscriptionCollection.isEmpty) {
    return (
      <SubscriptionListEmpty />
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader colSpan="2">Subscription</TableHeader>
          <TableHeader>Frequency</TableHeader>
          <TableHeader>Next order</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {subscriptionCollection.items.map(subscription => {
          return (
            <SubscriptionListItem
              key={subscription.id}
              subscription={subscription}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
