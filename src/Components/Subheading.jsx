import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <h2 className={`font-vol text-5xl font-medium text-primary ${className}`}>{text}</h2>
  )
}

export default Subheading