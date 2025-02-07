const Booking = require("../../model/bookingModel");

const createBooking = async (req, res) => {
  try {
    // Destructure fields from the request body
    const { name, email, phoneNumber, dateOfBirth, date, time, gender, appointmentDetail } = req.body;

    // Define required fields and their corresponding error messages
    const requiredFields = {
      name: "Name is required",
      email: "Email is required",
      phoneNumber: "Phone Number is required",
      dateOfBirth: "Date of Birth is required",
      date: "Booking Date is required",
      time: "Time is required",
      gender: "Gender is required",
      appointmentDetail: "Appointment Detail is required",
    };

    // Check if all required fields are present
    for (const [field, errorMessage] of Object.entries(requiredFields)) {
      if (!req.body[field]) {
        return res.status(400).json({ message: errorMessage });
      }
    }

     // Check if all required fields are present
     for (const [field, errorMessage] of Object.entries(requiredFields)) {
      if (!req.body[field]) {
        return res
          .status(400)
          .json({ message: `Path for '${field}' is missing: ${errorMessage}` });
      }
    }

    // Create a new booking entry
    const newBooking = await Booking.create({
      name,
      email,
      phoneNumber,
      dateOfBirth,
      date,
      time,
      gender,
      appointmentDetail
    });

    // Send a success response
    res.status(201).json({ message: "Booking created successfully.", booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later.", error: error.message });
  }
};

module.exports = createBooking;
