import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Card from './card'
import {useSelector} from 'react-redux'
import '../../app.css'
function Productmain() {
      const [select,setselect]=useState()
      
      const selectradio=(selected)=>{
        setselect(selected)
      }
       
      
  return (
    <div className='h-screen flex mt-12'>
                <div className='w-[200px] justify-between bg-slate-600'>
                <Sidebar select={selectradio}/>
                </div>
                    <div className=' scrollbar-container overflow-y-auto '>
                    <Card select={select}/>
                    </div>
                
                    
    </div>
  )
}

export default Productmain