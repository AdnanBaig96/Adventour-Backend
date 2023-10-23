const Bookings = require("../models/Bookings");

exports.getBookings = async (req, res) => {
  const userId = req.userId;
  try {
    const bookings = await Bookings.find({ userId });
    console.log(bookings);
    res.send(bookings);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.postBookings = async (req, res) => {
  const userId = req.userId;
  const payload = req.body;
  try {
    await Bookings.create({ ...payload, userId });
    res.send("Booked");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
