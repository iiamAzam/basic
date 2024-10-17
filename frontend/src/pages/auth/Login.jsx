import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {useForm} from 'react-hook-form'
function Login() {

      const {register,handleSubmit}=useForm()  
      const onSubmit = (data) => {
            console.log(data)

      };


      
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div  className=" border flex drop-shadow-md  flex-col   gap-4  border-black w-[350px] h-[250px] " >
          <div className=' mx-auto '><h1 className='font-extrabold  mt-5  '>Login</h1>
            <div className=' flex mt-5   flex-col gap-4'>

            <input
                className=' border-black w-[300px]   border focus:outline-0 ' 
                 {...register('Email',{required:true,
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                 })}
                placeholder=' Email'
            />  
              <input 
                className=' border-black w-[300px]   border focus:outline-0 ' 
                {...register('password', { 
                  required: "Password  is required", 
                 
                })} 
                placeholder=' Password'
            />  
             <input type="submit" />
            
           
            <h2 className='font-bold'>Note have account? <Link to={'/auth/register'}><span className='text-red-500'>Register here</span></Link> </h2>
            </div></div>
        </div>   </form>
       
  </>
  
  )
}

export default Login