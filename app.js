require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// Controller

// error Handler
const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error-handler");

app.use(express.json());

// Stripe

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server listening on port ${prot}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
