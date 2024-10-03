import exppress ,{ Request,Response} from 'express'
import mongoose from 'mongoose'


const app = exppress()

mongoose.connect('mongodb://localhost:27017/chat-learn').then (()=>console.log('db is conneted')).catch(()=>console.log('somthing went wrong '))


app.get('/',(req:Request,res:Response)=>{
            res.status(200).json({
                    succes : true,
                    message:"ok the server is wroking proparly "
            })
})

app.listen(3000,()=>{
    console.log('ok iam working proparly ')
})