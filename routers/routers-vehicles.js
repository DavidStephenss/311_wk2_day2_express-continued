const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/controllers-vehicles')

router.get('/vehicles', vehicleController.listVehicles)
router.post('/vehicles', vehicleController.createVehicle)
router.get('/vehicles', vehicleController.getOneVehicle)
router.put('/vehicles:id', vehicleController.updateVehicle)
router.delete('/vehicles:id', vehicleController.deleteVehicle)

module.exports = router