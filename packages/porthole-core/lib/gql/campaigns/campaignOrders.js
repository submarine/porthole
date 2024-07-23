import { gql } from '@apollo/client/core';

export const CAMPAIGN_ORDER_DETAILS = `
  campaign {
    ... on CrowdfundingCampaign {
      campaignEndTotalUnits
      campaignEndTotalValue {
        amount
        currency
      }
      campaignItemType
      campaignRunningTotalUnits
      campaignRunningTotalValue {
        amount
        currency
      }
      endAt
      endedAt
      fulfilAt
      goal {
        ... on TotalUnitsCrowdfundingGoal {
          goalType
          goalTotalUnits
        }
        ... on TotalValueCrowdfundingGoal {
          goalType
          goalTotalValue {
            amount
            currency
          }
        }
      }
      goalProgress
      goalStatus
      gracePeriodHours
      id
      launchAt
      name
      reference
      reservedItemsCount
      sequentialId
    }
    ... on PresaleCampaign {
      campaignItemType
      deposit {
        type
        value
      }
      endAt
      fulfilAt
      gracePeriodHours
      id
      launchAt
      limit
      name
      reference
      reservedItemsCount
      sequentialId
    }
  }
  campaignOrderGroup {
    campaignOrders {
      financials {
        totalPrice {
          amount
          currency
        }
      }
      fulfilmentStatus
      identifier
      id
      status
    }
    externalId
    financials {
      currency
      shipping {
        breakdown {
          title
        }
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
      totalDeposit {
        amount
        currency
      }
      totalPrice {
        amount
        currency
      }
    }
    id
    identifier
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
      id
    }
    paymentStatus
    status
  }
  customer {
    campaignOrdersCount
    email
    externalId
    firstName
    id
    lastName
  }
  financials {
    discountedUnitPrice {
      amount
      currency
    }
    itemPrice {
      amount
      currency
    }
    subtotal {
      amount
      currency
    }
    totalDeposit {
      amount
      currency
    }
    shipping {
      breakdown {
        title
      }
      total {
        amount
        currency
      }
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
    unitPrice {
      amount
      currency
    }
  }
  milestones {
    allocatedAt
    cancelledAt
    completedAt
    createdAt
    dueAt
    fulfilmentFulfilledAt
    fulfilmentHeldAt
    paidAt
  }
  fulfilmentStatus
  id
  identifier
  paymentStatus
  productVariant {
    id
    imageUrl
    product {
      externalId
      id
    }
    sku
    title
  }
  quantity
  status
`;

export const GET_CAMPAIGN_ORDERS = gql`
  query campaignOrders($after: String, $before: String, $first: Int!) {
    campaignOrders(after: $after, before: $before, first: $first) {
      edges {
        node {
          ${CAMPAIGN_ORDER_DETAILS}
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

export const SEARCH_CAMPAIGN_ORDERS = gql`
  query searchCampaignOrders(
    $after: String
    $before: String
    $campaignId: GlobalID
    $first: Int
    $fulfilmentStatus: [CampaignOrderFulfilmentStatus!]
    $last: Int
    $paymentStatus: [CampaignOrderPaymentStatus!]
    $query: String
    $sortDirection: SortDirection
    $sortKey: CampaignOrderSortKey
    $status: [CampaignOrderStatus!]
  ) {
    searchCampaignOrders(
      campaignId: $campaignId
      fulfilmentStatus: $fulfilmentStatus
      paymentStatus: $paymentStatus
      query: $query
      sortDirection: $sortDirection
      sortKey: $sortKey
      status: $status
    ) {
      campaignOrders(after: $after, before: $before, first: $first, last: $last) {
        edges {
          cursor
          node {
            ${CAMPAIGN_ORDER_DETAILS}
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
  }
`;

export const GET_CAMPAIGN_ORDER = gql`
  query campaignOrder($id: GlobalID!) {
    campaignOrder(id: $id) {
      ${CAMPAIGN_ORDER_DETAILS}
    }
  }
`;

export const CANCEL_CAMPAIGN_ORDER = gql`
  mutation campaignOrderCancel($input: CampaignOrderCancelInput!) {
    campaignOrderCancel(input: $input) {
      campaignOrder {
        ${CAMPAIGN_ORDER_DETAILS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;
