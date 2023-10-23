const express = require("express");
const {
  checkPagination,
  checkSort,
  checkFilter,
} = require("../middlewares/touristDestinations");
const { getDestinations, getSingleDestination } = require("../controllers/touristDestinations");

const touristDestinationsRouter = express.Router();

// touristDestinationsRouter.get("/", checkPagination, checkSort, checkFilter, getDestinations);

touristDestinationsRouter.get("/:id", getSingleDestination);

module.exports = touristDestinationsRouter;
