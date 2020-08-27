import Sequelize from "sequelize";
import db from "../database/sqliteDB";

const User = db.define("User", {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  phone: Sequelize.STRING,
  city: Sequelize.STRING,
  street: Sequelize.STRING,
  houseNumber: Sequelize.STRING,
});

export default User;
