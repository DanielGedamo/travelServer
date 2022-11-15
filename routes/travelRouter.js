const countryRouter = require("express").Router();
const {getcountry, addcountry ,updatecountry} = require ("../conrtoller/countrys-controler")

countryRouter.get("/", getcountry);
countryRouter.post("/addcountry", addcountry)
countryRouter.put("/updatecountry",updatecountry)


module.exports = countryRouter;
