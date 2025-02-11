const Booking = require("../../model/bookingModel");
const nodemailer = require("nodemailer");

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
        return res.status(400).json({ message: `Path for '${field}' is missing: ${errorMessage}` });
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

    // Send booking confirmation email
    await sendBookingConfirmationEmail(email, name, date, time, appointmentDetail);

    // Send a success response
    res.status(201).json({ message: "Booking created successfully.", booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later.", error: error.message });
  }
};

// Function to send email confirmation
const sendBookingConfirmationEmail = async (email, name, date, time, appointmentDetail) => {
  try {
    console.log("email sent to the user")
    // Create a transporter using SMTP settings (replace with your email credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation",
      html: `
        <h2>Booking Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Your booking has been confirmed with the following details:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Appointment Details:</strong> ${appointmentDetail}</li>
        </ul>
        <p>Thank you for choosing our service!</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Booking confirmation email sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

module.exports = createBooking;
