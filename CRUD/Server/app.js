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

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server on port number ${PORT}`);
    });
  })
  .on("error", (error) => {
    console.log("Connection error:", error);
  });
