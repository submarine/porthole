import { useMutation } from '@apollo/client';

import { SKIP_SUBSCRIPTION_ORDER } from '@submarine/porthole-core';

export const useSkipSubscriptionOrder = ({ id, options = {} }) => {
  const [
    subscriptionOrderSkip,
    {
      loading: subscriptionOrderSkipping,
      error: skipSubscriptionOrderError
    }
  ] = useMutation(SKIP_SUBSCRIPTION_ORDER, options);

  const skipSubscriptionOrder = () => {
    subscriptionOrderSkip({
      variables: {
        input: {
          id: `gid://submarine/SubscriptionOrder/${id}`
        }
      }
    });
  };

  return {
    skipSubscriptionOrder,
    subscriptionOrderSkipping,
    skipSubscriptionOrderError
  };
};
