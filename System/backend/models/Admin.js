import Sequelize from "sequelize";
import db from "../database/sqliteDB";

const Admin = db.define("Admin", {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  headAdmin: Sequelize.BOOLEAN,
});

export default Admin;
