import { mergeResolvers } from "@graphql-tools/merge";
import userResolvers from "./userResolvers";
import mealResolvers from "./mealResolvers";
import mealCategoryResolvers from "./mealCategoryResolvers";
import pageSettingsResolvers from "./pageSettingsResolvers";

const composedResolvers = mergeResolvers([
  userResolvers,
  mealResolvers,
  mealCategoryResolvers,
  pageSettingsResolvers,
]);

export default composedResolvers;
