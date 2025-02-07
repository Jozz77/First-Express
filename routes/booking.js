const express = require('express');
const createBooking = require('../controller/booking/createBooking');
const getAllBookings = require('../controller/booking/getAllBookings');
const router = express.Router();

/* GET bookings listing. */

router.post("/create-booking", createBooking)
router.get("/bookings", getAllBookings);

module.exports = router;