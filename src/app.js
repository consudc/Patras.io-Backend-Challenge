const express = require(`express`);
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

require("./database/database");

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(routes);

// Error catching endware.
app.use((error, req, res, next) => {
  const status = error.status || 404;
  const message = error.message || error;
  res.status(status).send(message);
});

module.exports = app;
