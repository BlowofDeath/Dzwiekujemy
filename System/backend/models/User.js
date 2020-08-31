import Sequelize from "sequelize";
import db from "../database/sqliteDB";

const User = db.define("User", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: Sequelize.STRING,
  phone: Sequelize.STRING,
  city: Sequelize.STRING,
  street: Sequelize.STRING,
  houseNumber: Sequelize.STRING,
});

export default User;
