import Sequelize from "sequelize";
import db from "../database/sqliteDB";
import User from "./User";

const Order = db.define("Order", {
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  city: Sequelize.STRING,
  street: Sequelize.STRING,
  houseNumber: Sequelize.STRING,
  payment: Sequelize.INTEGER,
  pickup: Sequelize.INTEGER,
  status: Sequelize.STRING,
  comment: Sequelize.TEXT,
});

Order.belongsTo(User);
User.hasMany(Order);

export default Order;
