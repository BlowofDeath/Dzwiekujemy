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

  type Mutation {
    updateMealCategory(id: ID!, category: String!, order: Int!): MealCategory!
    deleteMealCategory(id: ID!): MealCategory
    addMealCategory(category: String!, order: Int!): MealCategory!
  }
`;

export default mealCategoryType;
