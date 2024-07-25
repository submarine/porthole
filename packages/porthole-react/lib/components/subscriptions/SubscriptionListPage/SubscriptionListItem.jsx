import React from 'react';

import { Link } from 'react-router-dom';

export const SubscriptionListItem = ({ subscription }) => {
  return (
    <div>
      <h3>{subscription.identifier}</h3>
      <Link to={`/subscriptions/${subscription.id}`}>
        Manage subscription
      </Link>
    </div>
  )
}
