const { addToCart } = require('../controller/Cart.controller')

const { requireSignIn } = require('../middleware/authetication')


const router = require('express').Router()

router.post('/cart/addToCart',requireSignIn,addToCart)



module.exports =router