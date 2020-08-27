import Sequelize from "sequelize";
import db from "../database/sqliteDB";
import Order from "./Order";
import Meal from "./Meal";

const OrderDetail = db.define("OrderDetail", {
  quanity: Sequelize.INTEGER,
});

OrderDetail.belongsTo(Order);
Order.hasMany(OrderDetail);

OrderDetail.belongsTo(Meal);
Meal.hasMany(OrderDetail);

export default OrderDetail;
