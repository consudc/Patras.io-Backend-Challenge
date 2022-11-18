require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/database/database");

require("./src/models/Aeropuertos");

async function main() {
  try {
    await sequelize.authenticate();
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
