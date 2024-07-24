import React from 'react';

import { Link } from 'react-router-dom';

export const SubscriptionListItemsItem = ({ subscription }) => {
  return (
    <div>
      <Link to={`/subscriptions/${subscription.id}`}>
        {subscription.identifier}
      </Link>
    </div>
  )
}
