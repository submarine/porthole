import { useMutation } from '@apollo/client';

import { SET_SUBSCRIPTION_SCHEDULE } from '@submarine/porthole-core';

export const useSetSubscriptionSchedule = ({ id, options = {} }) => {
  const [
    subscriptionScheduleSet,
    {
      loading: settingSubscriptionSchedule,
      error: setSubscriptionScheduleError
    }
  ] = useMutation(SET_SUBSCRIPTION_SCHEDULE, options);

  const setSubscriptionSchedule = ({ nextDeliveryAt, subscriptionAnchorId, subscriptionPlanId }) => {
    subscriptionScheduleSet({
      variables: {
        input: {
          id: `gid://submarine/Subscription/${id}`,
          nextDeliveryAt,
          subscriptionAnchorId,
          subscriptionPlanId
        }
      }
    });
  };

  return {
    settingSubscriptionSchedule,
    setSubscriptionScheduleError,
    setSubscriptionSchedule
  };
};
