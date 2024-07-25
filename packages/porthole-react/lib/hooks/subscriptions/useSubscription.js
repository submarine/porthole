import { useQuery } from '@apollo/client';

import { GET_SUBSCRIPTION, Subscription } from '@submarine/porthole-core';

import { useEffect, useState } from 'react';

export const useSubscription = ({ id }) => {
  const [subscription, setSubscription] = useState(null);

  const {
    data: subscriptionData,
    loading: subscriptionLoading,
    error: subscriptionError
  } = useQuery(GET_SUBSCRIPTION, {
    variables: {
      id: `gid://submarine/Subscription/${id}`
    }
  });

  useEffect(() => {
    if (subscriptionData?.subscription?.id) {
      setSubscription(
        new Subscription(subscriptionData?.subscription)
      );
    }
  }, [subscriptionData]);

  return {
    subscription,
    subscriptionLoading,
    subscriptionError
  };
};
