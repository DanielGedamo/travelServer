const countryRouter = require ("express").Router();
const {
  getcountry,
  deletecountry,
  updatecountry,
  getTraveById,
  createcountry,
} = require("../conrtoller/country-controler");
countryRouter.get("/", getcountry);
module.exports = countryRouter;
