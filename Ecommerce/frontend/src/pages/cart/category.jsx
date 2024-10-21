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



function Category() {
        const select= useSelector(state=>state.product)
        const [prdt, setprdt] = useState([])
        const [bg,setbg]=useState('bg-white')
        console.log(cat)
        useEffect(( )=>{
            select.then((res)=>setprdt([...res]))
        },[select])

     const bgsetup=(def)=>{
                setbg(def)
     }
        
      
  return (
    <div className={`${bg} z-0 transition-all duration-500`}>
        <div className='px-14 my-8'>
        <p className='text-[20px]     font-semibold'>
                Category
        </p>
        </div>
       
    <div className='flex    items-center justify-center  gap-4'>
    
      {
       cat.map((e,i)=>(
        <Card
        key={e.cat+i}
        titale={e.cat}
        pic={e.pic}
        bgsetup={bgsetup}
        color={e.color}
        />
       )) }</div>
       <div className='flex  my-10   items-center justify-center  gap-4'>
       {
        cat1.map((e,i)=>(
            <Card
            key={e.cat+i}
            titale={e.cat}
            pic={e.pic}
            bgsetup={bgsetup}
            color={e.color}
            />
        ))
       }
    </div>
    </div>
  )
}

export default Category