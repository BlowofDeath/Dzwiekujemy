// ./graphql/types/index.js
import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./userType";
import mealType from "./mealType";
import mealCategoryType from "./mealCategoryType";
import pageSettingsType from "./pageSettingsType";
import orderType from "./orderType";
import orderDetailType from "./orderDetailType";

const types = [
  userType,
  mealType,
  mealCategoryType,
  pageSettingsType,
  orderType,
  orderDetailType,
];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypeDefs(types, { all: true });

//HELP
//https://www.apollographql.com/blog/designing-graphql-mutations-e09de826ed97/
