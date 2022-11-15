const carsArray = require("../model/cars-models")
 
const getCar = ((req,res) => {
    res.send(carsArray)
})

module.exports = {
    getCar
}
