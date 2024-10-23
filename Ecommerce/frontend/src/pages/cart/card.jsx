import React from 'react'



function Card({titale,pic,color}) {
    // const bg_changer=()=>{
    //     bgsetup(color)
    // }
    // const leave=()=>{
    //     bgsetup('bg-white')
    // }

  return (

    <div className='px-10  '>
            <div    className={` w-[180px]  rounded-md    text-white      backdrop-blur-sm  bg-black/10  items-center justify-center h-[225px] border   border-white `}>
                <div  className=' w-[160px] mx-auto  overflow-hidden '>
                <img className=' mt-[10px] hover:scale-110 w-[160px] h-100 transition-all mx-auto' src={pic}>
                </img>
                </div>
                <div className='ml-2 text-center'>
                    <p >
                         {titale} 
                    </p>
                    
                    
                </div>
                <button className={` w-[140px] mt-4 rounded p-[2px] mx-auto block  border border-white `}>
                        Check
                </button>   
               
            </div>
    </div>
  )
}

export default Card