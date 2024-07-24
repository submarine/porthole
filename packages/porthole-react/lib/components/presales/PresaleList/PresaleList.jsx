import React from 'react';

import { useCampaignOrderSearchCollection } from '../../../hooks/index.js';

import { PresaleListList } from './PresaleListList.jsx';
import { PresaleListError } from './PresaleListError.jsx';
import { PresaleListLoading } from './PresaleListLoading.jsx';

export const PresaleList = () => {
  const {
    campaignOrderCollection,
    campaignOrderCollectionLoading,
    campaignOrderCollectionError
  } = useCampaignOrderSearchCollection({
    variables: {
      first: 10,
      campaignType: 'PRESALE',
      sortDirection: 'DESC'
    }
  });

  if (!campaignOrderCollection || campaignOrderCollectionLoading) {
    return (
      <PresaleListLoading />
    )
  }

  if (campaignOrderCollectionError) {
    return (
      <PresaleListError />
    )
  }

  return (
    <PresaleListList />
  )
}
