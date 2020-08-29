import Order from "../models/Order";
import OrderDetail from "../models/OrderDetail";

import User from "../models/User";

const orderResolvers = {
  Query: {
    orders: async (_, args, context) => {
      const orders = await Order.findAll();
      return orders;
    },
  },
  Order: {
    details: async ({ id }, args, context) => {
      const details = await OrderDetail.findAll({ where: { OrderId: id } });
      return details;
    },
    summaryPrice: async ({ id }, args, context) => {
      const orderDetail = await OrderDetail.findAll({
        where: { OrderId: id },
        include: "Meal",
      });
      let sum = 0;
      orderDetail.forEach((item, index) => {
        sum += item.Meal.price * item.quanity;
      });

      return sum;
    },
    email: async ({ UserId }, args, context) => {
      const user = await User.findOne({ where: { id: UserId } });
      return user.email;
    },
  },
};

export default orderResolvers;
