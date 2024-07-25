import { useMutation } from '@apollo/client';

import { PAUSE_SUBSCRIPTION } from '@submarine/porthole-core';

export const usePauseSubscription = ({ id, options = {} }) => {
  const [
    subscriptionPause,
    {
      loading: subscriptionPausing,
      error: pauseSubscriptionError
    }
  ] = useMutation(PAUSE_SUBSCRIPTION, options);

  const pauseSubscription = () => {
    subscriptionPause({
      variables: {
        input: {
          id: `gid://submarine/Subscription/${id}`
        }
      }
    });
  };

  return {
    subscriptionPausing,
    pauseSubscriptionError,
    pauseSubscription
  };
};
