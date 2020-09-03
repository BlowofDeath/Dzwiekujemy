import { gql } from "@apollo/client";

export const DELETE_MEAL = gql`
  mutation DeleteMeal($id: ID!) {
    deleteMeal(id: $id) {
      id
    }
  }
`;
