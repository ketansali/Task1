const { signUp, signIn } = require('../controller/User.controller')

const router = require('express').Router()

router.post('/user/signUp',signUp)
router.post('/user/signIn',signIn)


module.exports =router