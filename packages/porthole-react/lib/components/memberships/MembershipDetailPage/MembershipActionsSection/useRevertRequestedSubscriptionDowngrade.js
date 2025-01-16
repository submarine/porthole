import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { GET_SUBSCRIPTION } from "@submarine/porthole-core";

const REVERT_SUBSCRIPTION_DOWNGRADE = gql`
  mutation RevertSubscriptionDowngrade($subscriptionUpdateInput: SubscriptionUpdateInput!) {
    subscriptionUpdate(input: $subscriptionUpdateInput) {
      userErrors {
        field
        message
      }
    }
  }
`;

export const useRevertRequestedSubscriptionDowngrade = ({ id, options = {} }) => {
  const [
    subscriptionRevertDowngradeRequest,
    {
      loading: subscriptionDowngradeRequestReverting,
      error: revertSubscriptionDowngradeRequestError
    }
  ] = useMutation(REVERT_SUBSCRIPTION_DOWNGRADE, {
    refetchQueries: [GET_SUBSCRIPTION],
    ...options
  });

  const revertSubscriptionDowngradeRequest = ({ currentCustomAttributesHash }) => {
    const newCustomAttributesHash = { ...currentCustomAttributesHash, '_downgrade_request_status': 'cancelled' }
    subscriptionRevertDowngradeRequest({
      variables: {
        subscriptionUpdateInput: {
          id: `gid://submarine/Subscription/${id}`,
          customAttributes: Object.entries(newCustomAttributesHash).map(([name, value]) => ({ name, value }))
        }
      }
    });
  };

  return {
    subscriptionDowngradeRequestReverting,
    revertSubscriptionDowngradeRequestError,
    revertSubscriptionDowngradeRequest
  };
};
