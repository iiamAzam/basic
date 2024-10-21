


import React from 'react'
import { Outlet } from 'react-router-dom'

function Authlayout() {
  return (
   
            <div className=' flex justify-center   h-screen items-center  '>
                <Outlet/>
            </div>
      
  )
}

export default Authlayout