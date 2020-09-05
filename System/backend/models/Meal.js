import Sequelize from "sequelize";
import db from "../database/sqliteDB";
import MealCategory from "./MealCategory";

const Meal = db.define("Meal", {
  dish: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  dayOfWeek: Sequelize.INTEGER,
  archived: { type: Sequelize.BOOLEAN, defaultValue: false },
});

Meal.belongsTo(MealCategory);
MealCategory.hasOne(Meal);

export default Meal;
