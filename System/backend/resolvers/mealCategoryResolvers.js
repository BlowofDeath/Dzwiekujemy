import Meal from "../models/Meal";
import MealCategory from "../models/MealCategory";

const mealCategoryResolvers = {
  Query: {
    mealCategories: async (_, args, context) => {
      const mealCategories = await MealCategory.findAll();
      return mealCategories;
    },
  },
};

export default mealCategoryResolvers;
