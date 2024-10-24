import React, { useState } from 'react';

function Input({ price,rad }) {
          const [selected,setselected]=useState('')
          
          const selectedprize=(e)=>{
            setselected(e.target.value)
            console.log(selected)
            rad(selected)
          }
  return (
    <div className='flex '>
      <input
        name="rad"
        type="radio"
        value={price}
        onChange={selectedprize}
        id={`radio-${price}`}
      />
      <label htmlFor={`radio-${price} `}> $ {price}</label>
    </div>
  );  
}

export default Input;
