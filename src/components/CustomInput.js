import React from 'react'

function CustomInput({type, name, placeholder}) {
  return (
    <div>
    <input
      type={type}
      name={name}
      className='form-control'
      placeholder={placeholder}
    />
  </div>
  )
}

export default CustomInput