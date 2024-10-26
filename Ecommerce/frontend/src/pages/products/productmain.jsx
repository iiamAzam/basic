import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Card from './card'
import {useSelector} from 'react-redux'
import '../../app.css'
import Category from '../cart/category'
function Productmain() {
      const [cat,setcat]=useState()
      
      const selectradio=(selected)=>{
        setcat(selected)
      }
      
      
      
  return (
    <div className='h-screen flex mt-12'>
                <div className='w-[200px] justify-between border mt-3  bg-secondary'>
                <Sidebar selectradio={selectradio} />
                </div>
                <div className=' scrollbar-container overflow-y-auto '>
                <Card cat={cat}/>
                </div>
    </div>
  )
}

export default Productmain