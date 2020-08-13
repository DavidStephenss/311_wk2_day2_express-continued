const express = require('express')
const router = express.Router()
const contactsController = require('./../controllers/controllers-contacts')

router.get('/contacts', contactsController.listContact)

router.post('/contacts', contactsController.createContact)

router.put('/contacts/:userId', contactsController.updateContact)

router.delete('/contacts:userId', contactsController.deleteContact)

router.get('/contacts/:userId', contactsController.showContact)

module.exports = router