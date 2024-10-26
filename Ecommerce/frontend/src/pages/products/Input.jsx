import React, { useEffect, useState } from 'react';

function Input({ price, rad ,val}) {
       
          const selectedprize=(e)=>{
            rad(e.target.value)
          }
         
  return (
    <div className='flex '>
      <input
        name="rad"
        type="radio"
        value={price}
        checked={val===price}
        onChange={selectedprize}
        id={`radio-${price}`}
      />
      <label htmlFor={`radio-${price} `}> $ {price}</label>
    </div>
  );  
}

export default Input;
