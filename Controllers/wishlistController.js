const wishlists = require('../Models/wishlistModel')

// add to wishlist
exports.addTowishlistController = async (req,res)=>{
    // get product id
    const {id} = req.params
    // get user id
    const userId = req.payload
    try{
        const existingProduct = await wishlists.findOne({productId:id,userId})
        if(existingProduct){
            res.status(406).json("Product already available in your wishlist!!!")
        }else{
            const newProduct = new wishlists({
                productId:id,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }catch(err){
        res.status(401).json(err)
    }
}