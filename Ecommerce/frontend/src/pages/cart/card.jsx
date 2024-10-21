import React from 'react'



function Card({titale,pic,color,bgsetup}) {
    const bg_changer=()=>{
        bgsetup(color)
    }
    const leave=()=>{
        bgsetup('bg-white')
    }

  return (

    <div className='px-10  '>
            <div   className={` w-[180px]     items-center justify-center h-[225px] border   border-black `}>
                <div className=' w-[160px] mx-auto  overflow-hidden '>
                <img className=' mt-[10px] hover:scale-110 w-[160px] transition-all mx-auto' src={pic}>
                </img>
                </div>
                <div className='ml-2 text-center'>
                    <p >
                         {titale} 
                    </p>
                    <p>
                        Prize : {2000}
                    </p>
                    
                </div>
                <button className=' w-[140px] mt-4 rounded p-[2px] mx-auto block  border border-black '>
                        Check
                </button>
               
            </div>
    </div>
  )
}

export default Card