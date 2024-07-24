import { useQuery } from '@apollo/client';

import { GET_SUBSCRIPTIONS, SubscriptionCollection } from '@submarine/porthole-core';

import { useEffect, useState } from "react";

export const useSubscriptionCollection = ({ variables }) => {
  const [subscriptionCollection, setSubscriptionCollection] = useState(null);

  const {
    data: subscriptionCollectionData,
    loading: subscriptionCollectionLoading,
    error: subscriptionCollectionError
  } = useQuery(GET_SUBSCRIPTIONS, {
    variables
  });

  useEffect(() => {
    setSubscriptionCollection(
      new SubscriptionCollection(subscriptionCollectionData?.subscriptions)
    );
  }, [subscriptionCollectionData]);

  return {
    subscriptionCollection,
    subscriptionCollectionLoading,
    subscriptionCollectionError
  };
};
