import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
function Card() {
        const select=useSelector((select)=>select.search.value)
        const prdct=useSelector((state=> state.product))
        const [product, setproduct]=useState([])
        useEffect(()=>{
            prdct.then((res)=>setproduct([...res]))
        },[prdct])
    
        
      
  return (
    <div>
           
            <div className='  w-[900px] flex  flex-wrap'>
                {
                   product.map((e,)=>(
                        <div key={e.id} className=' w-[200px] m-3 border h-[250px] justify-between   flex '>   
                            <div
                            className='flex text-center flex-col justify-center mx-auto p-2'
                            >
                              <div className='h-[130px] flex items-center justify-center'>
                              <img className='w-[80px] h-[100px ]'  src={e.image}/>
                              </div>
                            <p >{e.title}</p>
                            <p>Price: $:{e.price}</p>
                            <button className='p-1 bg-yellow-200 rounded-lg'>
                              ADD TO CART
                            </button>
                            </div>
                        </div>
                   ))
                    
                }
            </div>

    </div>
  )
}

export default Card