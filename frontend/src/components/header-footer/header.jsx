import React from 'react'
function Header() {
  return (
    <div className='bg-black py-1 text-white'>
    <div className=' flex justify-between p-2'>
        <div className='  flex gap-8 ml-[80px]'>
       
            <span className=' cursor-pointer'>Ecommerce</span>
            <span className=' cursor-pointer'>Shop</span>
            <span className=' cursor-pointer'>Stories</span>
            <span className=' cursor-pointer'>About</span>
            <span className=' cursor-pointer'>Stories</span>
            <span className=' cursor-pointer'><input className='focus:outline-none' id='search'  placeholder=' Search ' /></span>

        </div>
        <div className=' flex gap-7 mr-[80px]'>
            <span className=' cursor-pointer'>Cart</span>
            <span className=' cursor-pointer'>Login</span>
            
        </div>

    </div>
    
    </div>
  )
}

export default Header