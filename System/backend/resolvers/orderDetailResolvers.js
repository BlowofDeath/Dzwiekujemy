import Meal from "../models/Meal";

const orderDetailResolvers = {
  OrderDetail: {
    dish: async ({ MealId }, args, context) => {
      const meal = await Meal.findOne({
        where: { id: MealId },
      });
      return meal.dish;
    },
  },
};

export default orderDetailResolvers;
