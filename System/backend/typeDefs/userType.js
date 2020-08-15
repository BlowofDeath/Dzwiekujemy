import { gql } from "apollo-server-express";

const userType = gql`
  type Query {
    me: User!
    user(id: ID!): User!
  }

  type User {
    index_number: Int!
    email: String!
    first_name: String!
    last_name: String!
    password: String!
  }

  type Auth {
    user: User!
    token: String!
  }
`;

export default userType;
