import { useMutation } from '@apollo/client';

import { CANCEL_SUBSCRIPTION } from '@submarine/porthole-core';

export const useCancelSubscription = ({ id, options = {} }) => {
  const [
    subscriptionCancel,
    {
      loading: subscriptionCancelling,
      error: cancelSubscriptionError
    }
  ] = useMutation(CANCEL_SUBSCRIPTION, options);

  const cancelSubscription = ({ cancelAt }) => {
    subscriptionCancel({
      variables: {
        input: {
          id: `gid://submarine/Subscription/${id}`,
          cancelAt
        }
      }
    });
  };

  return {
    subscriptionCancelling,
    cancelSubscriptionError,
    cancelSubscription
  };
};
