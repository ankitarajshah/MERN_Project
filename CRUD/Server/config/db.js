const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");

    // Event handlers for connection events
    // Event handler for connection errors
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    // Event handler for disconnected
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// let _db;

// const mongoConnect = async () => {
//   try {
//     const client = await MongoClient.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected to MongoDB");
//     _db = client.db();

//     // Optionally, handle disconnect event
//     client.on("close", () => {
//       console.log("MongoDB connection closed");
//       _db = null; // Reset _db variable
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "No database found!";
// };

// module.exports = {
//   mongoConnect,
//   getDb,
// };
