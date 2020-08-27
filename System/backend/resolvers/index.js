import { mergeResolvers } from "@graphql-tools/merge";
import userResolvers from "./userResolvers";
import mealResolvers from "./mealResolvers";
import mealCategoryResolvers from "./mealCategoryResolvers";

const composedResolvers = mergeResolvers([
  userResolvers,
  mealResolvers,
  mealCategoryResolvers,
]);

export default composedResolvers;
