const express = require('express')
const productController = require('../Controllers/productsController')


const router = new express.Router()

// get all products
router.get('/products/all',productController.getAllProductsController)





module.exports = router