import React from 'react';

import { SubscriptionListItemsEmpty } from './SubscriptionListItemsEmpty';
import { SubscriptionListItemsItem } from './SubscriptionListItemsItem';

export const SubscriptionListItems = ({ subscriptionCollection }) => {
  return (
    <div>
      {subscriptionCollection.isEmpty ? (
        <SubscriptionListItemsEmpty />
      ) : (
        subscriptionCollection.items.map(subscription => {
          return (
            <SubscriptionListItemsItem
              key={subscription.id}
              subscription={subscription}
            />
          );
        })
      )}
    </div>
  )
}
