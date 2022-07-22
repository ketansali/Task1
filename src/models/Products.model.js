const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
        title : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        description : {
            type : String
        },
        quantity : {
            type : Number,
            required : true
        }
},{timestamps:true})



module.exports = mongoose.model('Products',productsSchema)