const express = require('express')
const productController = require('../Controllers/productsController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const router = new express.Router()

// get all products
router.get('/products/all',productController.getAllProductsController)

// register
router.post('/user/register',userController.registerController)

// login
router.post('/user/login',userController.loginController)

// getproduct
router.get('/product/get/:id',productController.getProductController)
// addwishlist
router.get('/wishlist/add/:id',jwtMiddleware,wishlistController.addTowishlistController)


module.exports = router