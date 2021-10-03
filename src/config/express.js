//? ***Express Configuration***

const express = require("express");
const cors = require("cors");
var morgan = require("morgan");
const app = express();

//? Routes of app
const routes = require("../routes");

module.exports = () => {

  // *Morgan package -> https://expressjs.com/en/resources/middleware/morgan.html
  app.use(morgan("dev"));

  //? Cors headers
  app.use(cors());
  //? express module
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);

  return app;
};
