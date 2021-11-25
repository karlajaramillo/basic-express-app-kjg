const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true
    },
  },
  { // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

// Model 'User', the collection will be: 'users', based on the schema
module.exports = mongoose.model("User", UserSchema);
