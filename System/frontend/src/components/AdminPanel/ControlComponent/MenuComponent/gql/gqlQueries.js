import { gql } from "@apollo/client";

export const MEALS = gql`
  query Meals {
    meals {
      id
      dish
      description
      price
      category
      dayOfWeek
      MealCategoryId
    }
  }
`;

export const MEAL_CATEGORIES = gql`
  query MealCategory {
    mealCategories {
      id
      category
    }
  }
`;
