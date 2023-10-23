const express = require("express");
const Bookings = require("../models/Bookings");
const verifyAuth = require("../middlewares/verifyAuth");
const { getBookings, postBookings } = require("../controllers/bookingsController");

const bookingRouter = express.Router();

bookingRouter.get("/", verifyAuth, getBookings);

bookingRouter.post("/post", verifyAuth, postBookings);

module.exports = bookingRouter;
