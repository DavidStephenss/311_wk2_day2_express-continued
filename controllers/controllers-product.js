const products = require('../data/products')
let counter = products.length+1


const listAllProducts = (req, res) => {
 res.json(products)
}

const listOneProduct = (req, res) => {
    if (req.params.id) {
      res.json = products.filter(products => products._id === parseInt( req.params.id))
    }
}

const createProduct = (req, res) => {
  products.push({_id: counter++, ...req.body})
  res.json(products[products.length-1])
}

const updateProduct = (req, res) => {
    let foundProduct = product.find( product => product._id === parseInt(req.params.productId))
    foundProduct.name = req.boyd.name ? req.body.name : foundProduct.name
    foundProduct.description = req.body.description ? req.body.description : foundProduct.description
    foundProduct.rating = req.body.rating ? req.body.rating : foundProduct.rating
    foundProduct.imgUrl = req.body.imgUrl ? req.body.imgUrl : foundProduct.imgUrl
    foundProduct.price = req.body.price ? req.body.price : foundProduct.price
    foundProduct.category = req.body.category ? req.body.category : foundProduct.category
    foundProduct.reviews = req.body.reviews ? req.body.reviews : foundProduct.reviews
    res.json(foundProduct)
} 


const deleteProduct = (req, res) => {
  let foundProduct = products.find( product => product._id === parseInt (req.params.productId))
  if (foundProduct) {
    foundProduct.active = false
    res.send("sheeeshh")
  } else {
    res.status(400).json({message: 'no product with this id of ${req.params.productId}'})
  }
}


module.exports = {
  listAllProducts,
  listOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
}