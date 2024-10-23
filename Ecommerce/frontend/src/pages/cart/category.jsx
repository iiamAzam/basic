import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import Card from './card'
import acc from '../../resource/Accessories.jpg'
import baby from '../../resource/baby.jpg'
import beuty from '../../resource/beuty.jpg'
import ele from '../../resource/electronics.jpg'
import fa from '../../resource/fashion.jpg'
import sp from '../../resource/sports.jpg'
import grr from '../../resource/grocaries.jpg'
import off from '../../resource/office.jpg'

const cat=[{
   cat:'Fashion',
   pic: fa,
   color:'bg-pink-300'
},{
    cat:'Beauty',
    pic:beuty,
    color:'bg-orange-500'

},{
    cat: ' Groceries',
    pic:grr,
    color:' bg-sky-400'
},{
    cat:'Sports',
    pic:sp,
    color:' bg-green-400'

}   
]


const cat1=[{
    cat:'Baby',
    pic: baby,
    color:' bg-white'


 },{
     cat: 'Office',
     pic: off,
         color:'bg-green-500'
 },{
     cat:  'Accessories',
     pic: acc,
     color:'bg-pink-700'


 },{
     cat:'Electronics',
     pic:ele,
     color: "bg-amber-50"
 }]



function Category({bg}) {
        const select= useSelector(state=>state.product)
        const [prdt, setprdt] = useState([])
        // const [bg,setbg]=useState('bg-white')

        useEffect(( )=>{
            select.then((res)=>setprdt([...res]))
        },[select])

    //  const bgsetup=(def)=>{
    //             setbg(def)
    //  }

     const bg_clr=[ 
   
       "bg-gradient-to-r from-blue-200 to-blue-200",
       "bg-gradient-to-r from-blue-200 to-blue-100",
       "bg-gradient-to-r from-blue-100 to-blue-200",
       "bg-gradient-to-r from-blue-200 to-blue-100",
      

     ]
        
      
  return (
    <div className={`${bg_clr[bg]?'bg-secondary':''} z-0 p-5  transition-colors ease-in-out duration-1000`}>
        <div className='px-1 my-8'>
        <p className='text-[20px]     font-semibold'>
                Category
        </p>
        </div>
       
    <div className='flex  backdrop-blur-sm py-8  bg-black/10 rounded-md    items-center justify-center  gap-4'>
    
      {
       cat.map((e,i)=>(
        <Card
        key={e.cat+i}
        titale={e.cat}
        pic={e.pic}
        color={`${bg_clr[bg]==="bg-black"?'text-white':'text-black'}`}
        />
       )) }</div>
       <div className='flex  my-10 backdrop-blur-sm py-8  bg-black/10 rounded-md    items-center justify-center  gap-4'>
       {
        cat1.map((e,i)=>(
            <Card
            key={e.cat+i}
            titale={e.cat}
            pic={e.pic}
            color={`${bg_clr[bg]==="bg-black"?'text-white':'text-black'}`}
            />
        ))
       }
    </div>
    </div>
  )
}

export default Category