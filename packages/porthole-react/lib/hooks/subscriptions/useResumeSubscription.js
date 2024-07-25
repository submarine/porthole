import { useMutation } from '@apollo/client';

import { RESUME_SUBSCRIPTION } from '@submarine/porthole-core';

export const useResumeSubscription = ({ id, options = {} }) => {
  const [
    subscriptionResume,
    {
      loading: subscriptionResuming,
      error: resumeSubscriptionError
    }
  ] = useMutation(RESUME_SUBSCRIPTION, options);

  const resumeSubscription = ({ nextDeliveryDate }) => {
    subscriptionResume({
      variables: {
        input: {
          id: `gid://submarine/Subscription/${id}`,
          nextDeliveryDate
        }
      }
    });
  };

  return {
    subscriptionResuming,
    resumeSubscriptionError,
    resumeSubscription
  };
};
