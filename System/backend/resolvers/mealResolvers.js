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
  Mutation: {
    updateMeal: async (
      _,
      { id, dish, description, price, MealCategoryId, dayOfWeek },
      context
    ) => {
      await Meal.update(
        { id, dish, description, price, MealCategoryId, dayOfWeek },
        {
          where: {
            id,
          },
        }
      );

      return await Meal.findOne({ where: { id } });
    },
    deleteMeal: async (_, { id }, context) => {
      try {
        await Meal.destroy({
          where: {
            id,
          },
        });
      } catch (err) {
        throw new Error("Bład przy usuwaniu");
      }
      return { id };
    },
    addMeal: async (
      _,
      { id, dish, description, price, MealCategoryId, dayOfWeek },
      context
    ) => {
      const meal = await Meal.create({
        id,
        dish,
        description,
        price,
        MealCategoryId,
        dayOfWeek,
      });
      if (!meal) throw new Error("Błąd podczas tworzenia nowego elementu");
      return meal;
    },
  },
};

export default mealResolvers;
