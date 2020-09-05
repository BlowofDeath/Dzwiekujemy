import { gql } from "@apollo/client";

export const MEAL_CATEGORIES = gql`
  query MealCategories {
    mealCategories {
      id
      category
      order
    }
  }
`;
