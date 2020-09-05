import { gql } from "@apollo/client";

export const MEAL_CATEGORIES = gql`
  query MealCategory {
    mealCategories {
      id
      category
    }
  }
`;
