import React from 'react';

import { useCampaignOrderSearchCollection } from '../../../hooks/index.js';
import { useThemedComponents } from '../../../theme/useThemedComponents.js';

import { PresaleListList as DefaultPresaleListList } from './PresaleListList.jsx';
import { PresaleListError as DefaultPresaleListError } from './PresaleListError.jsx';
import { PresaleListLoading as DefaultPresaleListLoading } from './PresaleListLoading.jsx';

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

  const {
    Loading: { component: Loading, props: loadingProps },
    Error: { component: Error, props: errorProps },
    List: { component: List, props: listProps }
  } = useThemedComponents({
    Loading: (
      <DefaultPresaleListLoading
        title="Loading..."
      />
    ),
    Error: (
      <DefaultPresaleListError
        title="Error!"
      />
    ),
    List: (
      <DefaultPresaleListList />
    )
  });

  if (!campaignOrderCollection || campaignOrderCollectionLoading) {
    return (
      <Loading {...loadingProps} />
    )
  }

  if (campaignOrderCollectionError) {
    return (
      <Error {...errorProps} />
    )
  }

  return (
    <List {...listProps} />
  )
}
