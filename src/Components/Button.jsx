import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
       <button className={`bg-secondary text-primary px-2 py-5 hover:text-white duration-300 font-jost font-medium text-lg ${className}`}> <span className='border px-10 py-3'>{text}</span></button>
    </div>
  )
}

export default Button