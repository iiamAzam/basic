const mongoose = require ('mongoose')
const Schema = mongoose.schema

const userData = new Schema ({
        Name : {
            type:String ,
            required:true
        },
        Email :{
            type: string ,
             required : true , 
             unique: true 
        },
        Password : {
            type : String ,
            required: true
            
        }

},{
    timestamps:true
})

module.exports=mongoose.model('userdata',userData)