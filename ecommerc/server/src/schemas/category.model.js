const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const category = new Schema ({
    name:{
        type:String,
        required:true
    },
    description:
    {
        type : String ,
        required : true 
    }

},{
        timestamps:true
})


module.exports = mongoose.model ( 'category' , category)