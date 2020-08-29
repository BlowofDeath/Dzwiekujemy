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
    }
  }
`;

export const MEAL_CATEGORIES = gql`
  query MealCategory {
    mealCategories {
      category
    }
  }
`;

export const PAGE_SETTINGS = gql`
  query PageSettings {
    pageSettings {
      dayOfWeek
      online
    }
  }
`;
