const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"], // Custom error message for 'required'
    unique: true, // Ensure email is unique
    trim: true, // Removes leading and trailing spaces
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address", // Custom error message for invalid format
    ],
  },
  password: {
    type: String, // Password should be stored as a hashed string
    required: [true, "Password is required"], // Custom error message for 'required'
    trim: true,
    minlength: [6, "Password must be at least 6 characters long"], // Minimum length validation
    maxlength: [72, "Password cannot exceed 50 characters"], // Maximum length validation
  },
});

// Hash the password before saving the document
authSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });

// Export the model
module.exports = mongoose.model("Auth", authSchema, "Auth");
