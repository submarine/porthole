import { useQuery } from '@apollo/client';

import { CampaignOrderCollection, SEARCH_CAMPAIGN_ORDERS } from "@submarine/porthole-core";

import { useEffect, useState } from "react";

export const useCampaignOrderSearchCollection = ({ variables }) => {
  const [campaignOrderCollection, setCampaignOrderCollection] = useState(null);

  const {
    data: campaignOrderCollectionData,
    loading: campaignOrderCollectionLoading,
    error: campaignOrderCollectionError
  } = useQuery(SEARCH_CAMPAIGN_ORDERS, {
    variables
  });

  useEffect(() => {
    setCampaignOrderCollection(
      new CampaignOrderCollection(campaignOrderCollectionData?.searchCampaignOrders?.campaignOrders)
    );
  }, [campaignOrderCollectionData]);

  return {
    campaignOrderCollection,
    campaignOrderCollectionLoading,
    campaignOrderCollectionError
  };
};
