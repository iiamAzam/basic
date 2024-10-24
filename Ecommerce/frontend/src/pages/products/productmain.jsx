import React from 'react'
import Sidebar from './Sidebar'
import Card from './card'
function Productmain() {
  return (
    <div className='h-screen flex mt-12'>
                <div className='w-[600px] justify-between bg-slate-600'>
                <Sidebar/>
                </div>
                    <div className='bg-red-500  '>
                 <Card/>
                    </div>
                
                    
    </div>
  )
}

export default Productmain