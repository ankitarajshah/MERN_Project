const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse request bodies
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const productRoutes = require("./routes/productRoutes");

const PORT = process.env.PORT || 3001;
require("dotenv").config();
const connectDB = require("./config/database");
// Connect to MongoDB
connectDB();

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Product routes
app.use("/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
