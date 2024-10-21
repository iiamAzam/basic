import React from 'react'

function Input(
    {
        prop,label,placeholder
    }
) {
  return (
    <div>
        <label htmlFor='inp'>
           {label}
        </label>
        <input id='inp' placeholder={`${placeholder}`} className={`${ prop}  `} >
        </input>
    </div>
  )
}

export default Input