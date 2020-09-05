import { gql } from "@apollo/client";

export const DELETE_MEAL_CATEGORY = gql`
  mutation DeleteMealCategory($id: ID!) {
    deleteMealCategory(id: $id) {
      id
    }
  }
`;
