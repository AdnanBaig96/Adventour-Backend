const TouristDestinations = require("../models/TouristDestinations");

const pagination = async (req, res, next) => {
  const { page, limit } = req.query;
  let paginationQuery = {};
  paginationQuery["page"] = page ? page : 1;
  paginationQuery["limit"] = page ? (limit ? limit : 9) : 0;
  req.paginationQuery = paginationQuery;
  next();
};

const sort = async (req, res, next) => {
  const { sort, order } = req.query;
  let sortQuery = {};
  if (sort) {
    sortQuery = { [sort]: order ? (order == "desc" ? -1 : 1) : 1 };
  }
  req.sortQuery = sortQuery;

  next();
};

const filter = async (req, res, next) => {
  const { state } = req.query;
  let filterQuery = {};
  if (state) filterQuery["state"] = state;

  const paginationQuery = req.paginationQuery;
  const sortQuery = req.sortQuery;
  req.resTDs = await touristDestinationsModel
    .find(filterQuery)
    .skip((paginationQuery.page - 1) * paginationQuery.limit)
    .limit(paginationQuery.limit)
    .sort(sortQuery);
  next();
};

module.exports = { pagination, sort, filter };
