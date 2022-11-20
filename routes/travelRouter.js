const countryRouter = require("express").Router();
const {getcountry, addcountry ,updatecountry,deliteCountry} = require ("../conrtoller/countrys-controler")

countryRouter.get("/", getcountry);
countryRouter.post("/addcountry", addcountry)
countryRouter.put("/updatecountry",updatecountry)
countryRouter.delete("/deliteCountry",deliteCountry)


module.exports = countryRouter;
