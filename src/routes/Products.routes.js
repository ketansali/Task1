const { addProduct, getAllProduct, deleteProduct, updateProduct } = require('../controller/Product.controller')
const { requireSignIn } = require('../middleware/authetication')


const router = require('express').Router()

router.post('/products/addProduct',requireSignIn,addProduct)
router.get('/products/getAllProduct',requireSignIn,getAllProduct)
router.post('/products/deleteProduct/:id',requireSignIn,deleteProduct)
router.post('/products/updateProduct/:id',requireSignIn,updateProduct)



module.exports =router