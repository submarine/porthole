import { gql } from "@apollo/client/core";
import { SUBSCRIPTION_DETAILS } from "./subscriptions";

export const NEXT_SUBSCRIPTION_ORDER = gql`
  mutation subscriptionOrderProcess($input: SubscriptionOrderProcessInput!) {
    subscriptionOrderProcess(input: $input) {
      subscriptionOrder {
        id
        paymentStatus
        status
        subscription {
          ${SUBSCRIPTION_DETAILS}
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const PROCESS_SUBSCRIPTION_ORDER = gql`
  mutation subscriptionOrderProcess($input: SubscriptionOrderProcessInput!) {
    subscriptionOrderProcess(input: $input) {
      subscriptionOrder {
        id
        paymentStatus
        status
        subscription {
          ${SUBSCRIPTION_DETAILS}
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const SKIP_SUBSCRIPTION_ORDER = gql`
  mutation subscriptionOrderSkip($input: SubscriptionOrderSkipInput!) {
    subscriptionOrderSkip(input: $input) {
      subscriptionOrder {
        id
        status
        subscription {
          ${SUBSCRIPTION_DETAILS}
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;
