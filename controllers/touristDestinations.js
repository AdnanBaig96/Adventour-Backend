const TouristDestinations = require("../models/TouristDestinations");

exports.getDestinations = async (req, res) => {
  try {
    const destinations = await TouristDestinations.find();
    console.log(destinations);
    res.send(destinations);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getSingleDestination = async (req, res) => {
  const { id } = req.params;
  try {
    const singleDestination = await TouristDestinations.findOne({ id: id });
    res.send(singleDestination);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
