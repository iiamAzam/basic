import React, { useState } from 'react'
import img from '../../resource/DALL·E 2024-10-11 14.03.50 - A view from behind of a young man sitting at a desk, focused on his laptop. The environment around him is futuristic, with glowing elements and digita.webp'
import  '../../App.css'
import {useDispatch,useSelector} from 'react-redux'
// const cart= [
//             {
//                 name:'mens winter jacket ',
//                 size : 'L',
//                 quantitu:1,
//                 prize: 99

//             },
//             {
//                 name:'mens winter jacket ',
//                 size : 'L',
//                 quantitu:1,
//                 prize: 99

//             },
//             {
//                 name:'mens winter jacket ',
//                 size : 'L',
//                 quantitu:1,
//                 prize: 99

//             },
//             {
//                 name:'mens winter jacket ',
//                 size : 'L',
//                 quantitu:1,
//                 prize: 99

//             }
// ]

    
function Cart() {
    const  select = useSelector((state)=>state.product)
    const [cart,setcart]=useState([])
    select.then (res=>setcart([...res]))
  
    
  return (
        
        <div className='flex  mx-[100px]   gap-5  mt-[100px] mb-[100px]'> 
                <div>
                <div className=' w-[500px] overflow-y-scroll scrollbar scrollbar-thin h-[400px]'>
                       <div className=''>
                        <h2 className=' text-[30px] font-bold'>Your cart </h2>
                        <p className=' font=madium'>Not ready to chekout? Continue Shopping</p>
                        </div>
                      
                      
                   {   
                   cart.map((e,i)=>(
                    <div
                    key={i+e.name+e.size}
                    className=' mr-5 '
                   >
                    <div  className=' flex     gap-4 my-4'>
                    <div>       
                        <img className='w-[120px]' src={e.image}>
                        </img>  
                    </div>
                    <div  className=' w-full'>                                                                                                           
                            
                            <p className=''> Product : {e.title}</p>
                            <p>Size:{e.size}</p>
                            <p>Quantity :{e}</p>
                            <div className=' flex   w-full justify-between ' >
                                <p className='font-bold text-[20px]'>${e.price}</p>
                                <p className=''><u>Remove</u></p>
                            </div>

                    </div>
                    </div>
                    <hr className=' '/> 
                </div>
                   ))      }
                       
                        {/* <div className=' flex my-4  gap-4 '>
                        <div >       
                                <img className='w-[120px]' src={img}>
                                </img>  
                            </div>
                            <div  className='w-full'>                                                                                                           
                                    
                                    <p className='font-bold'>Mens winter jacket</p>
                                    <p>Size:L</p>
                                    <p>Quantity : 1</p>
                                    <div className='flex   w-full justify-between '>
                                        <p className=' font-bold text-[20px] '>$99</p>
                                        <p className='inline-block '><u>Remove</u></p>
                                    </div>

                              
                            </div>
                            
                                
                        </div> */}

                </div>
                <div className='mt-20 w-[500px] '>
                    <h2 className='font-semibold my-2 '>
                            Order information 
                    </h2>
                    <hr className=' bg-black h-[2px]'>
                    </hr>
                    <p className='my-2'>
                        Return policy
                    </p>
                    <p className='my-2'>
                        This our Example return policy which is evrythinh you know about our returns 
                    </p>
                    <hr className='bg-black h-[1.5px]' >
                    </hr>
                    <p className='my-2'>
                        Shipping options 
                    </p>
                    <hr className='bg-black h-[1.5px]' />
                    <p className='my-2 '>
                        Shipping options 
                    </p>
                    <hr className='bg-black h-[2px]' />
                    
                </div>
                </div>
                <div className=' w-[350px] '>

                        <h2 className='text-[20px] my-2 ' > 
                            Order summary 
                        </h2>
                        <input type='text' name="coupan" placeholder=' Enter the coupan code ' className=' focus:outline-none my-4 w-full  border border-black'  />
                        <div className='flex my-1 justify-between'>
                        <p>Subtotal</p>
                        <p>$200</p>
                        </div>
                        <div className=' flex my-4 justify-between'>
                        <p>Shipping</p>
                            <p>Calculate at next step </p>
                        </div>
                        <hr className='bg-black h-[1.5px]  '  ></hr>
                        <div className='flex  mt-2 justify-between'>
                        <p>Total</p>
                        <p>${200}</p>   
                        </div>
                        <button className='bg-black text-white p-1 w-full my-3' >
                            Continue to checkout 
                        </button>
                        
                </div>
        </div>
  )
}

export default Cart