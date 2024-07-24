import { useMutation } from '@apollo/client';

import { CANCEL_CAMPAIGN_ORDER } from '@submarine/porthole-core';

export const useCancelCampaignOrder = (id, options) => {
  const [
    campaignOrderCancel,
    {
      loading: campaignOrderCancelling,
      error: cancelCampaignOrderError
    }
  ] = useMutation(CANCEL_CAMPAIGN_ORDER, options);

  const cancelCampaignOrder = () => {
    campaignOrderCancel({
      variables: {
        input: {
          id: `gid://submarine/CampaignOrder/${id}`
        }
      }
    });
  };

  return {
    cancelCampaignOrder,
    campaignOrderCancelling,
    cancelCampaignOrderError
  };
};
