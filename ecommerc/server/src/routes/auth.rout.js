const express = require('express')

const route = express.Router()

route.get('/',(req,res)=>{
    res.json({
            mission : 'successfull',
            
    })
})

module.exports=route
