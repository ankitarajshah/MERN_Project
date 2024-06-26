const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();

//Middleware to parse request bodies
app.use(bodyParser.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello World!");
});


