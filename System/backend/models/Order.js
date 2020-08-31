import Sequelize from "sequelize";
import db from "../database/sqliteDB";
import User from "./User";

const Order = db.define("Order", {
  phone: Sequelize.STRING,
  city: Sequelize.STRING,
  street: Sequelize.STRING,
  houseNumber: Sequelize.STRING,
  payment: Sequelize.INTEGER,
  pickup: Sequelize.INTEGER,
  status: Sequelize.INTEGER,
  comment: Sequelize.TEXT,
});

Order.belongsTo(User, {
  targetKey: "email",
  foreignKey: "email",
});
User.hasMany(Order, {
  sourceKey: "email",
  foreignKey: "email",
});

export default Order;
