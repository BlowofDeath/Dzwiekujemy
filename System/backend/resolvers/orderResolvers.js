import Order from "../models/Order";
import OrderDetail from "../models/OrderDetail";

import User from "../models/User";

const orderResolvers = {
  Query: {
    orders: async (_, { status }, context) => {
      if (status) {
        const orders = await Order.findAll({ where: { status } });
        return orders;
      }
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
  },
  Mutation: {
    createOrder: async (_, { order, details }, context) => {
      // console.log(details);
      console.log(order);

      const orderTemp = await Order.create(
        {
          phone: order.phone,
          city: order.city,
          street: order.street,
          houseNumber: order.houseNumber,
          payment: order.payment,
          pickup: order.pickup,
          email: order.email,
          comment: order.comment,
          OrderDetails: details,
          status: order.payment === 0 ? 1 : 2,
        },
        {
          include: [OrderDetail],
        }
      );

      return orderTemp;
    },
    acceptOrder: async (_, { id, accept }, context) => {
      const order = await Order.findOne({ where: { id } });
      order.status = accept ? 3 : 4;
      await order.save();

      return order;
    },
  },
};

export default orderResolvers;
