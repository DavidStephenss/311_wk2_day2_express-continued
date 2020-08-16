const vehicles = require('../data/vehicles')
let counter = vehicles.length+1

const listVehicles = (req, res) => {
  res.json(vehicles)
}
// const createVehicle = (req, res) => {
  
// }

// const getThemVehicles = (req, res) => {

// }

// const getOneVehicle = (req, res) => {

// }

// const updateVehicle  = (req, res) => {

// }

// const deleteVehicle = (req, res) => {

// }

module.exports = {
    listVehicles,
    // createVehicle,
    // getThemVehicles,
    // getOneVehicle,
    // updateVehicle,
    // deleteVehicle
}