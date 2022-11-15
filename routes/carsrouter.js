const carsRouter = require("express").Router()
const{
    
    getCar
} = require("../conrtoller/cars-crtl")
carsRouter.get("/",getCar)

module.exports =carsRouter