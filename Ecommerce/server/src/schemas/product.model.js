const mongooos = require ('mongoose')

const Schema = mongooos.Schema
const products=new Schema ({
        Name: {
            type: String,
            required : true
        },
        Description: {
            type: String,
            required : true
        },
        category: {
            type: mongooos.Schema.ObjectId,
            ref : category 
        },
        price:{
            type : Number,
            required : true 
        },
        stock: {
            type : Number,
            required : true 
        }
},{
    timestamps:true
})

module.exports= mongooos.model ( 'product' ,products)