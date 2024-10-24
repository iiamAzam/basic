import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
function Card() {
        const prdct=useSelector((state=> state.product))
        const [product, setproduct]=useState([])
        useEffect(()=>{
            prdct.then((res)=>setproduct([...res]))
        },[prdct])
    
        
      
  return (
    <div>
            hflkhjghlkfjghlj
            <div className='flex  flex-wrap'>
                {
                   product.map((e,)=>(
                        <div key={e.id}>   
                            <img className='w-[50px]' src={e.image}/>
                            <p>{e.title}</p>
                        </div>
                   ))
                    
                }
            </div>

    </div>
  )
}

export default Card