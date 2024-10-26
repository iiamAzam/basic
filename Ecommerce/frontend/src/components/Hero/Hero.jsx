import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../resource/hero/pexels-olly-3771088.jpg'
import img2 from '../../resource/hero/pexels-olly-4865280.jpg'
import img3 from '../../resource/hero/pexels-olly-5035611.jpg'
import img4 from '../../resource/hero/pexels-olly-787929.jpg'
import img5 from '../../resource/hero/pexels-solliefoto-298863.jpg'
import Category from '../../pages/cart/category'
import { useNavigate } from 'react-router-dom'
import '../../app.css'
const bg_clr=[ 
  "bg-gradient-to-r from-blue-500 to-indigo-700",
  "bg-gradient-to-r from-green-400 to-blue-600",
  "bg-gradient-to-r from-purple-600 to-pink-500",
  "bg-gradient-to-r from-yellow-500 to-red-500",
  
]

function Hero() {
  const navigate=useNavigate()
  const imges=[img1,img2,img3,img4,img5,img1,img2,img3,img4,img5,img1,img2,img3,img4,img5,]
  const [img,setimg]=useState(0)
  const [bg,setBgIndex]=useState(0)
  const scrollcontainerRef=useRef(null)
  const handleScroll1=(e)=>{
             if (scrollcontainerRef.current) {
              e.preventDefault();
              scrollcontainerRef.current.scrollLeft += e.deltaY * 1000;
             }
  }
  useEffect(()=>{
        const scrollcontener=scrollcontainerRef.current
        if (scrollcontener){
          scrollcontener.addEventListener('wheel',handleScroll1)
        }
        return ()=> scrollcontener.removeEventListener('wheel',handleScroll1)
  })
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newIndex = Math.floor(scrollY / 300) % bg_clr.length;
    setBgIndex(newIndex);
  };
      useEffect(()=>{
          const interval=setInterval(()=>{
            setimg((prev)=>(prev+1)%imges.length);
          },1800)
          return () => clearInterval(interval);
      },[imges.length])
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
    


  return (
    <div className=''>
        <div className=' text-center  '>
            <p className='  mt- text-[30px] '>
                Better Clothing for planet 
            </p>
           <div className='relative'>
            <img src={imges[img]}   className='w-full transform-gpu    object-cover  h-[540px]   '/>
           <div className=' absolute  left-[100px]  top-44'>
            
            <p className=' text-[50px]  text-white   font-extrabold  '>
              THE NEW ERA  OF <br/>
              DRESSING UP
            </p>
            <button onClick={()=>navigate('/product')} className='border-2 p-2 px-3  text-white text-[20px]    border-white '>
                Shop All
            </button>
            </div>
            </div>
           
        </div>
        <div className={` `}>
        <Category
        bg={bg}
        />
        <div className='bg-black/10 rounded-md px-5 mx-5' >
       <div  ref={scrollcontainerRef} className='overflow-x-auto 
        scrollbar-container  
       scroll-smooth backdrop-blur-sm  px-3  mb-20    snap-x snap-mandatory py-5'>
  <div className='inline-flex   space-x-4'>
    {imges.map((e, i) => (
      <div
     
        key={e + i}
        className='w-[300px] flex-shrink-0  flex  items-center scroll-smooth justify-center snap-start'
      >
        <img 
          src={e} 
          alt={`Slide ${i + 1}`} 
          className='object-cover h-[240px] w-full rounded-lg'
        />
      </div>
    ))}
  </div>
</div>
</div>

        
        </div>
      
    </div>
  )
}

export default Hero