import { gql } from "apollo-server-express";

const orderDetailType = gql`
  type OrderDetail {
    quanity: Int!
    dish: String!
  }
`;

export default orderDetailType;
