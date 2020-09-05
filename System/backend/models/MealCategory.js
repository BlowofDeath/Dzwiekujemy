import Sequelize from "sequelize";
import db from "../database/sqliteDB";
import Meal from "./Meal";

const MealCategory = db.define("MealCategory", {
  category: Sequelize.STRING,
  order: Sequelize.INTEGER,
  archived: { type: Sequelize.BOOLEAN, defaultValue: false },
});

export default MealCategory;
