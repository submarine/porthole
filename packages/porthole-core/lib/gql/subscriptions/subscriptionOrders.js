import { gql } from "@apollo/client/core";
import { SUBSCRIPTION_DETAILS } from "./subscriptions";

export const SUBSCRIPTION_ORDER_DETAILS = `
  createdAt
  customer {
    email
    externalId
    firstName
    id
    lastName
    phone
    subscriptionsCount
  }
  cycleIndex
  deliveryBehaviour {
    type
  }
  deliveryMethod {
    __typename
    ... on SubscriptionDeliveryMethodShipping {
      address {
        city
        country {
          code
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
  expectedBillingAt
  expectedDeliveryAt
  financials {
    discounts {
      total {
        amount
        currency
      }
    }
    shipping {
      total {
        amount
        currency
      }
    }
    subtotal {
      amount
      currency
    }
    tax {
      behaviour
      total {
        amount
        currency
      }
    }
    totalPrice {
      amount
      currency
    }
  }
  id
  identifier
  lastPaymentMethodUpdateEvent {
    createdAt
  }
  lines {
    financials {
      discounts {
        total {
          amount
          currency
        }
      }
      linePrice {
        amount
        currency
      }
      linePriceAfterDiscounts: linePrice(afterDiscounts: true) {
        amount
        currency
      }
      unitPrice {
        amount
        currency
      }
      unitPriceAfterDiscounts: unitPrice(afterDiscounts: true) {
        amount
        currency
      }
    }
    id
    lineType
    product {
      externalId
      id
      title
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
  nextSubscriptionOrder {
    id
    identifier
  }
  order {
    externalId
    id
    name
  }
  paused
  paymentIntent {
    adjustments {
      amount {
        amount
        currency
      }
      createdAt
      description
      id
      metadata
    }
    amount {
      amount
      currency
    }
    amountPaid {
      amount
      currency
    }
    balanceOwing {
      amount
      currency
    }
    charges {
      amount {
        amount
        currency
      }
      chargeType
      createdAt
      description
      externalId
      failureCode
      failureMessage
      id
      metadata
      recordStatus
      source
      status
    }
    id
    refunds {
      amount {
        amount
        currency
      }
      charge {
        id
      }
      createdAt
      description
      externalId
      id
      metadata
      recordStatus
      source
      status
    }
    status
  }
  paymentMethod {
    activePaymentInstrument {
      description
      id
      paymentSource {
        ... on Card {
          brand
          expiry {
            month
            year
          }
          last4
        }
      }
    }
    id
  }
  paymentStatus
  previousSubscriptionOrder {
    id
    identifier
  }
  processedAt
  skipped
  skippedAt
  status
  subscription {
    currency
    externalId
    id
    identifier
    lastProcessedOrder {
      cycleIndex
    }
    pricingBehaviour {
      basePricePolicy
    }
    subscriptionPlan {
      frequency {
        description
        interval
        intervalCount
        maxCycles
        minCycles
      }
      id
      name
      subscriptionPlanGroup {
        name
        reference
      }
    }
  }
`;

export const GET_SUBSCRIPTION_ORDER = gql`
  query subscriptionOrder($id: GlobalID!) {
    subscriptionOrder(id: $id) {
      ${SUBSCRIPTION_ORDER_DETAILS}
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
