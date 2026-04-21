import React, { Children } from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={`flex ${className}`}>{Children}</div>
  )
}

export default Flex