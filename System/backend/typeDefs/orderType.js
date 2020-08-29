import { gql } from "apollo-server-express";

const orderType = gql`
  type Query {
    orders: [Order]
  }

  type Order {
    id: ID!
    phone: String!
    city: String!
    street: String!
    houseNumber: String!
    payment: Int!
    pickup: Int!
    status: String!
    comment: String!
    details: [OrderDetail]
    summaryPrice: Int!
    email: String!
  }
`;

export default orderType;
