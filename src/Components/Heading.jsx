import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h5 className={`relative before:inline-block before:absolute before:w-[6px] before:h-[6px] before:bg-secondary before:rounded-full before:top-[9px] before:left-[-9px] before:content-[''] after:absolute after:left-[-49px] after:top-[11px] after:content-[''] after:w-[40px] after:border-secondary after:border-[1px] font-vol text-lg font-medium text-secondary ${className}`}>{text}</h5>
  )
}

export default Heading