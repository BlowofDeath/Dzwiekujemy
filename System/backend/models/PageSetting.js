import Sequelize from "sequelize";
import db from "../database/sqliteDB";

const PageSetting = db.define("PageSetting", {
  dayOfWeek: Sequelize.INTEGER,
  onlineOrders: Sequelize.BOOLEAN,
});

export default PageSetting;
