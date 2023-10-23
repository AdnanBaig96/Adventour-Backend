const express = require("express");
const { getDestinations, getSingleDestination } = require("../controllers/touristDestinations");

const touristDestinationsRouter = express.Router();

touristDestinationsRouter.get("/", getDestinations);

touristDestinationsRouter.get("/:id", getSingleDestination);

module.exports = touristDestinationsRouter;
