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
    <div className="rounded">
      <table className="w-full">
        <tbody className="account-order-details-inner border-b border-default last:border-transparent grid gap-4 lg:table-row-group">
          <tr className="hidden lg:table-row">
            <th className="py-4 bg-brand-marine text-left text-sm text-white font-bold tracking-default w-[calc(130/884*100%)] lg:pl-5 lg:rounded-l">
              Membership ID
            </th>
            <th className="py-4 bg-brand-marine text-left text-sm text-white font-bold tracking-default w-[calc(160/884*100%)]">
              Payment frequency
            </th>
            <th className="py-4 bg-brand-marine text-left text-sm text-white font-bold tracking-default w-[calc(155/884*100%)]">
              Next payment
            </th>
            <th className="py-4 bg-brand-marine text-left text-sm text-white font-bold tracking-default w-[calc(134/884*100%)] lg:pr-5 lg:text-right lg:rounded-r">
              Status
            </th>
          </tr>
          {subscriptionCollection.items.map((subscription, index) => {
            return (
              <MembershipListItem
                index={index}
                key={subscription.id}
                subscription={subscription}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
