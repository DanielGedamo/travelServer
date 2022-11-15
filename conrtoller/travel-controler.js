const countrysArray = require("../model/countrysArray")

const getTravel = (req , res) => {
    res.send(countrysArray)
}

const deleteTravel = (req , rea) => {}

const updateTravel = (req , rea) => {}

const getTraveById = (req , rea) =>{}
 
const createTravel =(req , rea) => {}

module.exports = {
    getTravel,
    getTraveById,
    deleteTravel,
    updateTravel,
    createTravel,
}