import { mergeResolvers } from "@graphql-tools/merge";
import userResolvers from "./userResolvers";
import mealResolvers from "./mealResolvers";
import mealCategoryResolvers from "./mealCategoryResolvers";
import pageSettingsResolvers from "./pageSettingsResolvers";
import orderResolvers from "./orderResolvers";
import orderDetailResolvers from "./orderDetailResolvers";

const composedResolvers = mergeResolvers([
  userResolvers,
  mealResolvers,
  mealCategoryResolvers,
  pageSettingsResolvers,
  orderResolvers,
  orderDetailResolvers,
]);

export default composedResolvers;
