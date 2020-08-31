import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation CreateOrder($order: OrderInput!, $details: [DetailsInput!]!) {
    createOrder(order: $order, details: $details) {
      id
    }
  }
`;
