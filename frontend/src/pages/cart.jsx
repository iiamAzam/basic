import React, { useState } from 'react'
import img from '../resource/DALL·E 2024-10-11 14.03.50 - A view from behind of a young man sitting at a desk, focused on his laptop. The environment around him is futuristic, with glowing elements and digita.webp'

const cart= [
            {
                name:'mens winter jacket ',
                size : 'L',
                quantitu:1,
                prize: 99

            },
            {
                name:'mens winter jacket ',
                size : 'L',
                quantitu:1,
                prize: 99

            },
            {
                name:'mens winter jacket ',
                size : 'L',
                quantitu:1,
                prize: 99

            },
            {
                name:'mens winter jacket ',
                size : 'L',
                quantitu:1,
                prize: 99

            }
]

function Cart() {
    const [prodt,setprdt] = useState(cart)
  return (
        <div className='flex  mx-[100px]   gap-10  mt-[100px]'> 
                <div className=' w-[500px]'>
                        <h2 className=' text-[30px] font-bold'>Your cart </h2>
                        <p className=' font=madium'>Not ready to chekout? Continue Shopping</p>
                      
                      
                      
                   {  
                   
                   
                   prodt.map((e,i)=>(
                    <div
                    key={i+e.name+e.size}
                    className=' flex    gap-4 my-4'>
                    <div>       
                        <img className='w-[120px]' src={img}>
                        </img>  
                    </div>
                    <div  className=' w-full'>                                                                                                           
                            
                            <p className='font-bold'>Mens winter jacket</p>
                            <p>Size:L</p>
                            <p>Quantity : 1</p>
                            <div className=' flex   w-full justify-between ' >
                                <p className='font-bold text-[20px]'>$99</p>
                                <p className=''><u>Remove</u></p>
                            </div>

                      
                    </div>
                    <hr className=' bg-slate-400  h-[2px]'> 
                    </hr>
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