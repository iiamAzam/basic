import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector  } from 'react-redux'
import { unvarsalsearch} from '../../Strore/uni'
function Header() {
  const [inp ,setinp]=useState('')
      const [megamenu,setmegamenu]=useState(false)
      const [search,setsearch]=useState(false)

      const dipatch=useDispatch()
      useEffect(()=>{
            dipatch(unvarsalsearch(inp))
      },[dipatch, inp])


     
      const [submenu ,setsubmenu]=useState({
           Stories:false,
           Shop:false,
           About:false,    
      })
      const mouseenter=(menutype)=>{
                   setmegamenu(true)
                   switch(menutype){
                      case 'Shop':
                        setsubmenu({...submenu,Shop:true,Stories:false,About:false})
                        break
                      case 'Stories':
                        setsubmenu({...submenu,Shop:false,Stories:true,About:false})
                        break
                      case 'About':
                        setsubmenu({...submenu,Shop:false,Stories:false, About:true})
                        break
                     
                   }
                
      }
      const mouseleave=()=>{
               setmegamenu(false)
      }


  return (
    <div className='bg-secondary py-1 '>
    <div className=' flex  justify-between p-2'>
        <div className=' relative flex gap-8 ml-[200px]'>
       
            <span className=' cursor-pointer'>Ecommerce</span>
            <span onMouseEnter={()=>{
                mouseenter('Shop')
            }} 
            className='cursor-pointer'>Shop</span>

            <span onMouseEnter={()=>{
                mouseenter('Stories')
            }} 
            className=' cursor-pointer'>Stories</span>

            <span onMouseEnter={()=>{
                mouseenter('About')
            }} 
            className=' cursor-pointer'>About</span>

            <span 
             className=' cursor-pointer'><input value={inp} onChange={(e)=>{
              setinp(e.target.value)
            }
              
              } className='focus:outline-none border border-black text-10 pl-2   text-black rounded-full' id='search'  placeholder='Search ' />
             <span className=' ml-4 cursor-pointer '></span>
             </span>
        </div>
        <div className=' flex gap-7 mr-[235px]'>
            <span className=' cursor-pointer'>Cart</span>
            <span className=' cursor-pointer'>Login</span>
            
        </div>
        <div>
              {
                megamenu&&(<div onMouseLeave={mouseleave} className={` transition-all ease-in-out duration-1000 absolute  bg-black/20 h-[400px] text-white  backdrop-blur-sm p-2 w-full  left-[0px] top-[48px]`}>
                     <div className={`ml-[200px] mt-10 `}>

                     { submenu.Shop &&<ul className={`text-[30px] w-[400px] flex flex-col gap-4  `}>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg inline-block cursor-pointer'>New arrival </li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg cursor-pointer'>Best sellers</li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg cursor-pointer'>Limited Edition</li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg cursor-pointer'>Seasonal sesional sales</li>
                        </ul> } 
                      { submenu.Stories &&<ul className={`text-[30px] w-[450px] flex flex-col gap-4  `}>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg  cursor-pointer'>Reviews & Testimonials </li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg  cursor-pointer'>Product Launch Highlights</li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg  cursor-pointer'>Collaboration with Influencers</li>
                       
                        </ul> } 
                      { submenu.About &&<ul className={`text-[30px] w-[400px] flex flex-col gap-4  `}>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg   cursor-pointer inline-block'>How It Started </li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg  cursor-pointer'>Key Milestones</li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg  cursor-pointer'>Meet the Team</li>
                        <li className=' px-[10px] hover:bg-black/10 rounded-lg  cursor-pointer'>Seasonal sesional sales</li>
                        </ul> } 
                      {
                        submenu.Search&&<div>
                          iam working
                          </div>
                      }

                      </div>
                  </div>)

                  

              }
        </div>

    </div>
    
    </div>
  )
}

export default Header