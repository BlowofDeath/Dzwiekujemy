import { gql } from "apollo-server-express";

const mealCategoryType = gql`
  type Query {
    mealCategories: [MealCategory]
  }

  type MealCategory {
    id: ID!
    category: String!
    order: Int!
  }
`;

export default mealCategoryType;
