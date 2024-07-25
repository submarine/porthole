import { useMutation } from '@apollo/client';

import { PROCESS_SUBSCRIPTION_ORDER } from '@submarine/porthole-core';

export const useProcessSubscriptionOrder = ({ id, options }) => {
  const [
    subscriptionOrderProcess,
    {
      loading: subscriptionOrderProcessing,
      error: processSubscriptionOrderError
    }
  ] = useMutation(PROCESS_SUBSCRIPTION_ORDER, options);

  const processSubscriptionOrder = () => {
    subscriptionOrderProcess({
      variables: {
        input: {
          id: `gid://submarine/SubscriptionOrder/${id}`
        }
      }
    });
  };

  return {
    processSubscriptionOrder,
    subscriptionOrderProcessing,
    processSubscriptionOrderError
  };
};
