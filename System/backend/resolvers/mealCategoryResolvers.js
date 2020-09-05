import Meal from "../models/Meal";
import MealCategory from "../models/MealCategory";

const mealCategoryResolvers = {
  Query: {
    mealCategories: async (_, args, context) => {
      const mealCategories = await MealCategory.findAll({
        where: { archived: false },
        order: [["order", "ASC"]],
      });
      return mealCategories;
    },
  },
  Mutation: {
    updateMealCategory: async (_, { id, category, order }, context) => {
      const mealCategoryOriginal = await MealCategory.findOne({
        where: { id },
      });
      if (!mealCategoryOriginal) throw new Error("Nie ma takiej kategorii");
      if (mealCategoryOriginal.archived === true) return mealCategoryOriginal;
      mealCategoryOriginal.archived = true;
      await mealCategoryOriginal.save();
      const mealCategory = await MealCategory.create({
        category,
        order,
      });

      return mealCategory;
    },
    deleteMealCategory: async (_, { id }, context) => {
      const mealCategory = await MealCategory.findOne({ where: { id } });
      if (!mealCategory) throw new Error("Nie znaleziono");
      mealCategory.archived = true;
      mealCategory.save();
      return { id };
    },
    addMealCategory: async (_, { category, order }, context) => {
      const mealCategory = await MealCategory.create({
        category,
        order,
      });
      if (!mealCategory)
        throw new Error("Błąd podczas tworzenia nowego elementu");
      return mealCategory;
    },
  },
};

export default mealCategoryResolvers;
