const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 7600
require('./Db/conn')
const userRoutes = require('./routes/User.routes') 
const productsRoutes = require('./routes/Products.routes')
const cartRoutes = require('./routes/Cart.routes')





//routes
app.use(express.json())
app.use('/api',userRoutes)
app.use('/api',productsRoutes)
app.use('/api',cartRoutes)











app.listen(PORT,()=>{
    console.log(`Server is Running On PORT :${PORT}`);
})