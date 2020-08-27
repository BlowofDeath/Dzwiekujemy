import { gql } from "apollo-server-express";

const mealCategoryType = gql`
  type Query {
    mealCategories: [MealCategory]
  }

  type MealCategory {
    category: String!
  }
`;

export default mealCategoryType;
