import React,{useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import StoreContext from '../../context/context'

export default function Register() {
  const {register , handleSubmit } = useForm()
  const { userregister}=useContext(StoreContext)
  const [logdin,setLogdin]=useState(false)
       const submitform=(data)=>{
          const reg = userregister(data)
              reg.then ((res)=>{
                if (res.data.success){
                      setLogdin(false)
               }
               else{
                   setLogdin(true)
               }
              }
            
            ).catch((err)=>{console.log(err)})
         
        }

  return  !logdin ? (<form onSubmit={handleSubmit(submitform)}>
    <div  className=" border flex drop-shadow-md  flex-col   gap-4  border-black w-[350px] h-[250px] " >
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
      <input type='submit'/>
   
      </div></div>
  </div>
  </form>):(
    <div  className=" border flex drop-shadow-md  flex-col   gap-4  border-black w-[350px] h-[250px] " >
    <div className=' mx-auto '><h1 className='font-extrabold  mt-5  '>Register</h1>
      <div className=' flex mt-5   flex-col gap-4'>

        <div><p className=' font-bold text-red-600'>Wrong password/email already registered</p></div>

   
   
      </div></div>
  </div>
    
  )}
  

