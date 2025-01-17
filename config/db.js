const mongoose = require("mongoose");

const connectDB = async (MongoUrl) => {
  try {
    await mongoose.connect(MongoUrl);
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
