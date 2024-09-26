import { useMutation } from '@apollo/client';

import { REVERT_SCHEDULED_SUBSCRIPTION_CANCELLATION } from '@submarine/porthole-core';

export const useRevertScheduledSubscriptionCancellation = ({ id, options = {} }) => {
  const [
    subscriptionRevertScheduledCancellation,
    {
      loading: scheduledSubscriptionCancellationReverting,
      error: revertScheduledSubscriptionCancellationError
    }
  ] = useMutation(REVERT_SCHEDULED_SUBSCRIPTION_CANCELLATION, options);

  const revertScheduledSubscriptionCancellation = () => {
    subscriptionRevertScheduledCancellation({
      variables: {
        input: {
          id: `gid://submarine/Subscription/${id}`
        }
      }
    });
  };

  return {
    scheduledSubscriptionCancellationReverting,
    revertScheduledSubscriptionCancellationError,
    revertScheduledSubscriptionCancellation
  };
};
