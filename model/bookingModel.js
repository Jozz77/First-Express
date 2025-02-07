const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Ensure email is unique
    trim: true, // Removes leading and trailing spaces
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address", // Custom error message for invalid format
    ],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of Birth is required"],
  },
  date: {
    type: String,
    required: [true, "Booking Date is required"],
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  appointmentDetail: {
    type: String,
    required: [true, "Appointment Detail is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
});

// Export the model
module.exports = mongoose.model("Bookings", bookingSchema, "bookings");
