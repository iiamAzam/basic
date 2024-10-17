import React from 'react'

function Footer() {
  return (
    <div className=' bg-slate-100 p-5 flex gap-5 '>
        <div className='w-[500px]'>
               <h1 className=' text-[30px] m-5'>Sign up for news latter  </h1> 
               <p className='m-5 text-[18px]'>Be the first to  know about special offers ,new product, launches and events</p>
              <span className=' border m-5 border-black p-1     ' > <input placeholder=' Email' className='bg-slate-100 focus:outline-none ' type='email'/> <button className='font-semibold'>SignUp</button></span>
               
            
        </div>  
                   <ul className='w-[200px]'>
                    <li className='mb-4 font-semibold'>Shop</li>
                    <li>
                        Women
                    </li>
                    <li>
                        Men's 
                    </li><li>
                        Kids 
                    </li><li>
                        Equipments 
                    </li>
                   </ul>
                   <ul className='w-[200px]'>
                    
                   <li className=' mb-4 font-semibold'>Help</li>
                    <li>
                       Help Center  
                    </li>
                    <li>
                       order status
                    </li><li>
                       Contect us
                    </li>

                   </ul>
                   <ul className='w-[200px] '>

                   <li className=' mb-4 font-semibold'>About</li>
                    <li>
                        About us  
                    </li>
                    <li>
                        Responsibality
                    </li><li>
                        Technology & innvation 
                    </li><li>
                        Explore our stories
                    </li>

                   </ul>
                    
    </div>
  )
}

export default Footer