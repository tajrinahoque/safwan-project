import React from 'react'

const Listitems = ({text,className}) => {
  return (
    <div>

        <li className={`font-jost font-normal text-lg text-primary hover:text-secondary duration-300 cursor-pointer ${className}`}>{text}</li>
    </div>
  )
}

export default Listitems