import { useQuery } from '@apollo/client';

import { GET_SUBSCRIPTION_ORDER, SubscriptionOrder } from '@submarine/porthole-core';

import { useEffect, useState } from 'react';

export const useSubscriptionOrder = ({ id }) => {
  const [subscriptionOrder, setSubscriptionOrder] = useState(null);

  const {
    data: subscriptionOrderData,
    loading: subscriptionOrderLoading,
    error: subscriptionOrderError
  } = useQuery(GET_SUBSCRIPTION_ORDER, {
    variables: {
      id: `gid://submarine/SubscriptionOrder/${id}`
    }
  });

  useEffect(() => {
    if (subscriptionOrderData?.subscriptionOrder?.id) {
      setSubscriptionOrder(
        new SubscriptionOrder(subscriptionOrderData?.subscriptionOrder)
      );
    }
  }, [subscriptionOrderData]);

  return {
    subscriptionOrder,
    subscriptionOrderLoading,
    subscriptionOrderError
  };
};
