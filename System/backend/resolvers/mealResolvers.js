import Meal from "../models/Meal";
import MealCategory from "../models/MealCategory";

const mealResolvers = {
  Query: {
    meals: async (_, args, context) => {
      const meals = await Meal.findAll({ where: { archived: false } });
      return meals;
    },
  },
  Meal: {
    category: async ({ MealCategoryId }, args, context) => {
      const category = await MealCategory.findOne({
        where: { id: MealCategoryId, archived: false },
      });
      if (!category) return null;
      return category.category;
    },
  },
  Mutation: {
    updateMeal: async (
      _,
      { id, dish, description, price, MealCategoryId, dayOfWeek },
      context
    ) => {
      const mealOriginal = await Meal.findOne({ where: { id } });
      if (!mealOriginal) throw new Error("Potrawa nie istnieje");
      if (mealOriginal.archived === true) return mealOriginal;
      mealOriginal.archived = true;
      await mealOriginal.save();
      const meal = await Meal.create({
        dish,
        description,
        price,
        MealCategoryId,
        dayOfWeek,
      });

      return meal;
    },
    deleteMeal: async (_, { id }, context) => {
      const meal = await Meal.findOne({ where: { id } });
      if (!meal) throw new Error("Nie znaleziono");
      meal.archived = true;
      meal.save();
      return { id };
    },
    addMeal: async (
      _,
      { dish, description, price, MealCategoryId, dayOfWeek },
      context
    ) => {
      const meal = await Meal.create({
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
