import { gql } from "@apollo/client/core";

export const PAYMENT_METHOD_DETAILS = `
  activePaymentInstrument {
    description
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
  externalId
  id
  status
`;

export const GET_PAYMENT_METHOD = gql`
  query paymentMethod($id: GlobalID!) {
    paymentMethod(id: $id) {
      ${PAYMENT_METHOD_DETAILS}
    }
  }
`;

export const SEND_PAYMENT_METHOD_UPDATE_EMAIL = gql`
  mutation paymentMethodSendUpdateEmail($input: PaymentMethodSendUpdateEmailInput!) {
    paymentMethodSendUpdateEmail(input: $input) {
      userErrors {
        field
        message
      }
    }
  }
`;
