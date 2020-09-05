import { gql } from "@apollo/client";

export const UPDATE_MEAL_CATEGORY = gql`
  mutation UpdateMealCategory($id: ID!, $category: String!, $order: Int!) {
    updateMealCategory(id: $id, category: $category, order: $order) {
      id
    }
  }
`;

export const ADD_MEAL_CATEGORY = gql`
  mutation AddMealCategory($category: String!, $order: Int!) {
    addMealCategory(category: $category, order: $order) {
      id
    }
  }
`;
