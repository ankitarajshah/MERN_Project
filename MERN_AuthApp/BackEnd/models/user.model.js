const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const User = mongoose.model("User", userSchema);
// module.exports = User;

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       required: [true, "Username is required"],
//       unique: true,
//       trim: true,
//       minlength: [3, "Username must be at least 3 characters long"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       trim: true,
//       match: [
//         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
//         "Please fill a valid email address",
//       ],
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: [6, "Password must be at least 6 characters long"],
//     },
//   },
//   { timestamps: true }
// );

// Password hashing middleware
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// // Method to compare passwords
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model("User", userSchema);

// module.exports = User;
