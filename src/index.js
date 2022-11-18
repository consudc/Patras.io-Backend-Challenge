require("dotenv").config();

const app = require("./app");
const sequelize = require("./database/database");

require("./models/Aeropuertos");

// const { PORT } = process.env;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    sequelize.sync({ force: false }).then(() => {
      app.listen(app.get("port"), () => {
        console.log("Listen on port", app.get("port")); // eslint-disable-line no-console
      });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
