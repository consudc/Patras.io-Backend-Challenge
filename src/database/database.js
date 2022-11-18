require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/appClima`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    //   dialectOptions: {
    //     ssl: {
    //       require: false,
    //       rejectUnauthorized: false,
    //     },
    //   },
  }
);

// const sequelize = new Sequelize(POSTGRESQL_DB, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: "postgres",
// });

module.exports = sequelize;
