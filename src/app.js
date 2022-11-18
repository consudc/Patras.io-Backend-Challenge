// const path = require("path");

const express = require(`express`);
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

require("./database/database");

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(routes);

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 404;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// statics files
// app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
