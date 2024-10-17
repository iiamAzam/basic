import mongoose from 'mongoose'
import express,{Router,Request,Response} from "express";




const Schema =mongoose.Schema

const todoSchema = new Schema({
    text : [
        {
            id:{
                type:String,
                required:true
            },
            text:{
                type:String,
                required:true
            }
        }
    ]
})

let todmdel=mongoose.model('todo',todoSchema)

const route=Router()

route.get('/todo',async (req:any ,res:any)=>{
    const data = await todmdel.find()
   try{
    if (data){
     return res.status (200).json({
        success:true,
        data
     })

    }}
    catch(error){
            return res.status(404).json({
                success:false,
                error:error
            })
    }
})

route.post('/todo',async (req:any,res:any)=>{
            const data = req.body
            try{
            const addnewdata =new  todmdel(data)
            await addnewdata.save()

            return res.status (200).json({
                sucess:true,
                message:'the data is added to the q'
            })
        
            }catch(error){
                        return res.status(404).json({
                            success:false,
                            message : "adding db is failed"
                        })
            }
})