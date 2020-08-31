import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    registerUser(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      user {
        id
        email
        phone
        city
        street
        houseNumber
      }
      token
    }
  }
`;
