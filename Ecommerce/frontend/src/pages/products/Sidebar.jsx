import React, { useState } from 'react';
import Input from './Input';

function Sidebar({selectradio}) {
        
  return (
    <div className='flex text-white  justify-center items-center  flex-col'>
      <div>
      <h2 className='text-[25px] my-3'>
        PRICE RANGE
      </h2>
      <div className='flex flex-col gap-2'>
      <Input  price="0-50" rad={selectradio} />
      <Input price="50-100" rad={selectradio} />
      <Input price="100-150" rad={selectradio} />
      <Input price="150-200" rad={selectradio} />
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
