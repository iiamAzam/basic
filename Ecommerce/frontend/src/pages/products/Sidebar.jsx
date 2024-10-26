import React, { useState } from 'react';
import Input from './Input';

function Sidebar({selectradio}) {
      const [selectedtoken,setselectedtoken]=useState('')
      const  handleclrearfilter=()=>{
        setselectedtoken('')
        selectradio('')
        }  
      const selctedradiovalue=(val)=>{
        setselectedtoken(val)
        selectradio(val)
        }
      


  return (
    <div className='flex text-black   justify-center items-center  flex-col'>
    
      <div> 
      <h2 className='text-[20px] my-3'>
        Price Range
      </h2>
      <button onClick={handleclrearfilter} className='px-[8px]  py-[4] bg-yellow-200 tex rounded-lg'>
        Clear filter
      </button>
      
      <div className='flex ml-[10px] flex-col gap-2'>
      <Input price="0-50" rad={selctedradiovalue} val={selectedtoken} />
      <Input price="50-100" rad={selctedradiovalue} val={selectedtoken} />
      <Input price="100-150" rad={selctedradiovalue} val={selectedtoken} />
      <Input price="150-200" rad={selctedradiovalue} val={selectedtoken} />
      </div>
    </div>

    
    </div>
  );
}

export default Sidebar;
