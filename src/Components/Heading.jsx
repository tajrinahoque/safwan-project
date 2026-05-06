import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h5 className={`font-vol text-lg font-medium text-secondary ${className}`}>{text}</h5>
  )
}

export default Heading