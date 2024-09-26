import React from 'react';

import { MembershipListEmpty } from './MembershipListEmpty';
import { MembershipListItem } from './MembershipListItem';

import { Table, TableHead, TableRow, TableHeader, TableBody } from '../../common';

export const MembershipList = ({ subscriptionCollection }) => {
  if (subscriptionCollection.isEmpty) {
    return (
      <MembershipListEmpty />
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader colSpan="2">Membership</TableHeader>
          <TableHeader>Payment frequency</TableHeader>
          <TableHeader>Next payment</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {subscriptionCollection.items.map(subscription => {
          return (
            <MembershipListItem
              key={subscription.id}
              subscription={subscription}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
