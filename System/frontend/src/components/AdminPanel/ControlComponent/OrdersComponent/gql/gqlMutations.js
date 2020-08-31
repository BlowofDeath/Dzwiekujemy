import { gql } from "@apollo/client";

export const ACCEPT_ORDER = gql`
  mutation AcceptOrDiscardOrder($id: ID!, $accept: Boolean!) {
    acceptOrder(id: $id, accept: $accept) {
      id
      status
    }
  }
`;
