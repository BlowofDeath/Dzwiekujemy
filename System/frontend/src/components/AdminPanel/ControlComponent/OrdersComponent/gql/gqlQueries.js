import { gql } from "@apollo/client";

export const ORDERS = gql`
  query Orders {
    orders {
      id
      email
      phone
      city
      street
      houseNumber
      payment
      pickup
      status
      comment
      summaryPrice
      details {
        quanity
        dish
      }
    }
  }
`;
