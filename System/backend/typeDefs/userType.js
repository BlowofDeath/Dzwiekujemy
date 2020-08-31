import { gql } from "apollo-server-express";

const userType = gql`
  type Query {
    me: User!
    user(id: ID!): User!
  }

  type User {
    id: ID!
    email: String!
    phone: String
    city: String
    street: String
    houseNumber: String
  }

  type Auth {
    user: User!
    token: String!
  }

  type Mutation {
    registerUser(
      email: String!
      password: String!
      confirmPassword: String!
    ): Auth!
    loginUser(email: String, password: String): Auth!
  }
`;

export default userType;
