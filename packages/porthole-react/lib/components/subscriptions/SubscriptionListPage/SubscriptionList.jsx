import React from 'react';

import { SubscriptionListEmpty } from './SubscriptionListEmpty';
import { SubscriptionListItem } from './SubscriptionListItem';

export const SubscriptionList = ({ subscriptionCollection }) => {
  return (
    <div>
      {subscriptionCollection.isEmpty ? (
        <SubscriptionListEmpty />
      ) : (
        subscriptionCollection.items.map(subscription => {
          return (
            <SubscriptionListItem
              key={subscription.id}
              subscription={subscription}
            />
          );
        })
      )}
    </div>
  )
}
