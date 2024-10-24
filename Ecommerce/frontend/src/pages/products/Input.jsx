import React from 'react'

function Input({val}) {
  return (
    <div>
        <label>
            <input
            type='Radio'
            value={val}
            >
            </input>
        </label>
    </div>
  )
}

export default Input