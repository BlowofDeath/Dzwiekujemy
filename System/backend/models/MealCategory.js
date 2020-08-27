import Sequelize from "sequelize";
import db from "../database/sqliteDB";
import Meal from "./Meal";

const MealCategory = db.define("MealCategory", {
  category: Sequelize.STRING,
});

export default MealCategory;
