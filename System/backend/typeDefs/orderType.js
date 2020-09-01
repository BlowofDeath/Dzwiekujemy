import { gql } from "apollo-server-express";

const orderType = gql`
  type Query {
    orders(status: Int): [Order]
  }

  type Order {
    id: ID!
    phone: String!
    city: String!
    street: String!
    houseNumber: String!
    payment: Int!
    pickup: Int!
    status: Int!
    comment: String
    details: [OrderDetail]
    summaryPrice: Int!
    email: String!
  }

  input DetailsInput {
    quanity: Int!
    MealId: ID!
  }

  input OrderInput {
    phone: String!
    city: String!
    street: String!
    houseNumber: String!
    payment: Int!
    pickup: Int!
    comment: String
    email: String!
  }

  type Mutation {
    createOrder(order: OrderInput!, details: [DetailsInput!]!): Order
    acceptOrder(id: ID!, accept: Boolean!): Order
  }
`;

export default orderType;
