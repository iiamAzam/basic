const express = require ('express')


const app = express ()
 
const  port = 3000

// app.get('/' , (req,res)=>{[
//                 res.json({
//                     message :`the server is running on the ${port}`,
//                     confirmation : "the server is running is successfully"
//                 })
// ]})

app.use('/',require('./src/routes/auth.rout'))

app.listen (port, ()=>{
    console.log(`the server is running on the ${port}`)
})