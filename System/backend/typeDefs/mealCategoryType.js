import { gql } from "apollo-server-express";

const mealCategoryType = gql`
  type Query {
    mealCategories: [MealCategory]
  }

  type MealCategory {
    category: String!
    order: Int!
  }
`;

export default mealCategoryType;
