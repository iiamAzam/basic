import React from 'react'
import img1 from './pexels-philpembani-2533352.jpg'
function Hero() {

  return (
    <div className='h-screen'>
        <div className=' text-center '>
            <p className=' block mt- text-[30px] '>
                Better Clothing for planet 
            </p>
            <button className='border p-2 px-3 mt-5 border-black p'>
                Shop All
            </button>
            <img src={img1}  className='w-[900px]  object-cover h-[350px] mx-auto mt-3 '/>
           
        </div>
    </div>
  )
}

export default Hero