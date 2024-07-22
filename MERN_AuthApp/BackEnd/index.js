const express = require("express");
// const morgan = require("morgan");
require("dotenv").config();

const userRoutes = require("./routes/user.route.js");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/user", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
