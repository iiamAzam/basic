import React,{useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import {authregister} from '../../Strore/Authslice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const {register , handleSubmit } = useForm()
  const logininfo = useSelector((state)=>state.auth.register)
  console.log(logininfo)
  // const { userregister}=useContext(StoreContext)
        const dispatch=useDispatch()
        const navigate=useNavigate()
       const submitform=(data)=>{
                console.log(data)
        dispatch(dispatch(authregister({register:{
                  
                auth:true,
                    name:data.userName,
                    email:data.email,
                    password:data.password
              }})))
              navigate('/')

        }

  return  <form onSubmit={handleSubmit(submitform)}>
    <div  className=" border flex drop-shadow-md  flex-col rounded-lg   gap-4  border-black w-[350px] h-[250px] " >
    <div className=' mx-auto '><h1 className='font-extrabold  mt-5  '>Register</h1>
      <div className=' flex mt-5   flex-col gap-4'>
      <input
          className={' border-black w-[300px]   border focus:outline-0 ' }
          label={""}
          {...register('userName',{ required: true })}
          placeholder={' UserName'}
      />  
        <input 
        className={' border-black w-[300px]    border focus:outline-0 ' }
          label={""}
          {...register('email',{ required: true })}

          placeholder={' Email'}
      />  
      <input
          className=' border-black w-[300px]   border focus:outline-0 ' 
          label={""}
          {...register('password',{ required: true })}
          placeholder={' Password'}
      /> 
      <input className=' bg-yellow-200 rounded-lg' type='submit'/>
   
      </div></div>
  </div>
  </form>}
  

