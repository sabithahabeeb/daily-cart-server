const express = require('express')
const productController = require('../Controllers/productsController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const cartController = require('../Controllers/cartController')
const router = new express.Router()

// get all products
router.get('/products/all',productController.getAllProductsController)

// register
router.post('/user/register',userController.registerController)

// login
router.post('/user/login',userController.loginController)

// getproduct
router.get('/product/get/:id',productController.getProductController)

// addtowishlist
router.post('/wishlist/add',jwtMiddleware,wishlistController.addTowishlistController)
// getwishlist
router.get('/wishlist/get-allproducts',jwtMiddleware,wishlistController.getWishlistController)
// removewishlist
router.delete('wishlist/remove/:id',jwtMiddleware,wishlistController.removeWishlistController)
// addtocart
router.post('cart/add',jwtMiddleware,cartController.addtoController)
// getcart
router.post('/cart/get-all-products',jwtMiddleware,cartController.getCartController)

module.exports = router