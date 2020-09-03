import { gql } from "@apollo/client";

export const UPDATE_MEAL = gql`
  mutation UpdateMeal(
    $id: ID!
    $description: String!
    $dish: String!
    $price: Int!
    $dayOfWeek: Int!
    $MealCategoryId: ID!
  ) {
    updateMeal(
      id: $id
      description: $description
      dish: $dish
      price: $price
      dayOfWeek: $dayOfWeek
      MealCategoryId: $MealCategoryId
    ) {
      id
      description
      dish
    }
  }
`;

export const ADD_MEAL = gql`
  mutation AddMeal(
    $description: String!
    $dish: String!
    $price: Int!
    $dayOfWeek: Int!
    $MealCategoryId: ID!
  ) {
    addMeal(
      description: $description
      dish: $dish
      price: $price
      dayOfWeek: $dayOfWeek
      MealCategoryId: $MealCategoryId
    ) {
      id
    }
  }
`;
