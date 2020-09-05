import { gql } from "apollo-server-express";

const mealType = gql`
  type Query {
    meals: [Meal]
  }

  type Meal {
    id: ID!
    dish: String!
    description: String
    price: Int!
    dayOfWeek: Int!
    category: String
    MealCategoryId: ID
  }

  type Mutation {
    updateMeal(
      id: ID!
      dish: String!
      description: String!
      price: Int!
      dayOfWeek: Int!
      MealCategoryId: ID!
      dayOfWeek: Int!
    ): Meal!
    deleteMeal(id: ID!): Meal
    addMeal(
      dish: String!
      description: String!
      price: Int!
      dayOfWeek: Int!
      MealCategoryId: ID!
      dayOfWeek: Int!
    ): Meal!
  }
`;

export default mealType;
