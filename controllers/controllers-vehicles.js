const vehicles = require('../data/vehicles')
let counter = vehicles.length+1

const listVehicles = (req, res) => {
  res.json(vehicles)
}
const createVehicle = (req, res) => {
  vehicles.push({_id: counter++, ...req.body})
  res.json(vehicles[vehicles.length -1])
}

const getOneVehicle = (req, res) => {
    if (req.params.id) {
      res.json = vehicles.filter(vehicles => vehicles._id === parseInt(req.params.id))
    }
}

const updateVehicle  = (req, res) => {
    let theVehicles = vehicles.find( vehicle => vehicle._id === parseInt(req.params.id))
    theVehicles.imgUrl = req.body.imgUrl ? req.body.imgUrl : theVehicles.imgUrl
    theVehicles.year = req.body.year ? req.body.year : theVehicles.year
    theVehicles.make = req.body.make ? req.body.make : theVehicles.make
    theVehicles.model = req.body.model ? req.body.model : theVehicles.model
    theVehicles.price = req.body.price ? req.body.price : theVehicles.price
    theVehicles.km = req.body.km ? req.body.km : theVehicles.km
    theVehicles.miles = req.body.miles ? req.body.miles : theVehicles.miles
    theVehicles.fuel = req.body.fuel ? req.body.fuel : theVehicles.fuel
    theVehicles.city = req.body.city ? req.body.city : theVehicles.city
    theVehicles.isNew = req.body.isNew ? req.body.isNew : theVehicles.isNew
    res.json(theVehicles)
}

const deleteVehicle = (req, res) => {
    let theVehicles = vehicles.find( vehicle = vehicle._id === parseInt(req.params.id))
    if (theVehicles) {
      theVehicles.isActive = false
      res.send('${req.params.id} is gone')
    } else {
      res.status(400).json({message: 'No vehicle here with the id of ${req.params.id'})
    }
}

module.exports = {
    listVehicles,
    createVehicle,
    getOneVehicle,
    updateVehicle,
    deleteVehicle
}