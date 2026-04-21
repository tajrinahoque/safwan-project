import React from 'react'

const Listitems = ({text}) => {
  return (
    <div>
        <li className='font-jost font-normal text-lg text-primary hover:text-secondary duration-300 cursor-pointer' >{text}</li>
    </div>
  )
}

export default Listitems