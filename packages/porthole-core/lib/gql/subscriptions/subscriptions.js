import { gql } from '@apollo/client/core';

export const SUBSCRIPTION_DETAILS = `
  availableSubscriptionPlans {
    anchors {
      description
      id
      name
    }
    frequency {
      description
      interval
      intervalCount
    }
    id
  }
  cancelAt
  cancelEvent {
    action
    createdAt
    description
  }
  createdAt
  currency
  customer {
    email
    externalId
    id
    firstName
    lastName
    subscriptionsCount
  }
  deliveryBehaviour {
    type
  }
  deliveryMethod {
    ... on SubscriptionDeliveryMethodShipping {
      address {
        city
        country {
          cityLabel
          code
          name
          presentProvinces
          presentableProvinces {
            code
            name
          }
          postcodeLabel
          provinceLabel
        }
        firstName
        lastName
        phone
        postcode
        province {
          code
          name
        }
        street1
        street2
      }
      shippingOption {
        title
      }
    }
  }
  externalId
  id
  identifier
  lastProcessedOrder {
    cycleIndex
    id
  }
  lines {
    basePrice {
      amount
      currency
    }
    id
    product {
      externalId
      id
    }
    productVariant {
      externalId
      id
      imageUrl
      sku
      title
    }
    quantity
  }
  nextBillingAt
  nextDeliveryAt
  nextScheduledOrder {
    cycleIndex
    expectedBillingAt
    expectedDeliveryAt
    financials {
      totalPrice {
        amount
        currency
      }
    }
    id
    nextSubscriptionOrder {
      id
      expectedBillingAt
      expectedDeliveryAt
    }
    paused
    paymentStatus
    status
    subscription {
      id
      lastProcessedOrder {
        cycleIndex
        id
      }
    }
  }
  paymentMethod {
    activePaymentInstrument {
      description
    }
    id
  }
  pauseEvent {
    action
    createdAt
    description
  }
  pendingCancellation
  pricingBehaviour {
    basePricePolicy
  }
  processedSubscriptionOrdersCount
  status
  subscriptionAnchor {
    description
    id
    type
  }
  subscriptionPlan {
    id
    name
    frequency {
      description
      interval
      intervalCount
      maxCycles
      minCycles
    }
  }
  updatedAt
`;

export const CANCEL_SUBSCRIPTION = gql`
  mutation subscriptionCancel($input: SubscriptionCancelInput!) {
    subscriptionCancel(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const GET_DELIVERY_SLOTS = gql`
  query subscriptionPlanGroup($id: GlobalID!) {
    subscriptionPlanGroup(id: $id) {
      id
      reference
      status
      subscriptionPlans {
        anchors {
          description
          id
          name
          schedule(first: 10) {
            deliverAt
          }
          type
        }
        deliveryBehaviour {
          type
        }
        frequency {
          description
        }
        id
        name
      }
    }
  }
`;

export const GET_SUBSCRIPTION = gql`
  query subscription($id: GlobalID!) {
    subscription(id: $id) {
      ${SUBSCRIPTION_DETAILS}
    }
  }
`;

export const GET_SUBSCRIPTIONS = gql`
  query subscriptions($after: String, $before: String, $first: Int!) {
    subscriptions(after: $after, before: $before, first: $first) {
      edges {
        node {
          ${SUBSCRIPTION_DETAILS}
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
`;

export const PAUSE_SUBSCRIPTION = gql`
  mutation subscriptionPause($input: SubscriptionPauseInput!) {
    subscriptionPause(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const RESTORE_SUBSCRIPTION = gql`
  mutation subscriptionRestore($input: SubscriptionRestoreInput!) {
    subscriptionRestore(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const RESUME_SUBSCRIPTION = gql`
  mutation subscriptionResume($input: SubscriptionResumeInput!) {
    subscriptionResume(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const REVERT_SCHEDULED_SUBSCRIPTION_CANCELLATION = gql`
  mutation subscriptionRevertScheduledCancellation($input: SubscriptionRevertScheduledCancellationInput!) {
    subscriptionRevertScheduledCancellation(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const SET_SUBSCRIPTION_SCHEDULE = gql`
  mutation subscriptionSetSchedule($input: SubscriptionSetScheduleInput!) {
    subscriptionSetSchedule(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const UPDATE_SUBSCRIPTION = gql`
  mutation subscriptionUpdate($input: SubscriptionUpdateInput!) {
    subscriptionUpdate(input: $input) {
      subscription {
        ${SUBSCRIPTION_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;
