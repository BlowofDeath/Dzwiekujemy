import { gql } from "apollo-server-express";

const mealType = gql`
  type Query {
    meals: [Meal]
  }

  type Meal {
    id: ID!
    description: String
    price: Int!
    dayOfWeek: Int!
    category: String!
  }
`;

export default mealType;
