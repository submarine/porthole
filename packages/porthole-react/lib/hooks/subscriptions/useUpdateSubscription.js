import { useMutation } from '@apollo/client';

import { UPDATE_SUBSCRIPTION } from '@submarine/porthole-core';

export const useUpdateSubscription = ({ id, options = {} }) => {
  const [
    subscriptionUpdate,
    {
      loading: subscriptionUpdating,
      error: updateSubscriptionError
    }
  ] = useMutation(UPDATE_SUBSCRIPTION, options);

  const updateSubscription = ({ lines }) => {
    subscriptionUpdate({
      variables: {
        input: {
          id: `gid://submarine/Subscription/${id}`,
          lines
        }
      }
    });
  };

  return {
    subscriptionUpdating,
    updateSubscriptionError,
    updateSubscription
  };
};
