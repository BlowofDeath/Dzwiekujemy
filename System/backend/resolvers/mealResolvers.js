import Meal from "../models/Meal";
import MealCategory from "../models/MealCategory";

const mealResolvers = {
  Query: {
    meals: async (_, args, context) => {
      const meals = await Meal.findAll();
      return meals;
    },
  },
  Meal: {
    category: async ({ MealCategoryId }, args, context) => {
      const category = await MealCategory.findOne({
        where: { id: MealCategoryId },
      });
      return category.category;
    },
  },
};

export default mealResolvers;
