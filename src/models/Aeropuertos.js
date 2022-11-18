const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Aeropuertos = sequelize.define(
  "aeropuertos",
  {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = Aeropuertos;
