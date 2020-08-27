import { gql } from "apollo-server-express";

const userType = gql`
  type Query {
    me: User!
    user(id: ID!): User!
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Auth {
    user: User!
    token: String!
  }
`;

export default userType;
