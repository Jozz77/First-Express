const Booking = require("../../model/bookingModel");

const getAllBookings = async (req, res) => {
  try {
    const bookingData = await Booking.find();
    if (!bookingData) {
      return res.status(404).json({ message: "Booking data not found" });
    }
    res.status(200).json(bookingData);
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

module.exports = getAllBookings;
