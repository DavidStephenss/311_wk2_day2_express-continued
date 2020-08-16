const express = require('express')
const router = express.Router()
const productsController = require('../controllers/controllers-product')

router.get('/products', productsController.listAllProducts)
router.get('/product/:productId', productsController.listOneProduct)
router.post('/product', productsController.createProduct)
router.put('/product/:productId', productsController.updateProduct)
router.delete('/product:productId', productsController.deleteProduct)


module.exports = router