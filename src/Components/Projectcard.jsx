import React from 'react'
import Images from '../Components/Images'
import aboutone from '../assets/about-1.jpg'

const Projectcard = ({title,subtitle,text,className}) => {
  return (
    <div>
        <div className='w-[370px] h-[270px]'>
        <Images className="w-full h-full" src={aboutone}/>
        </div>
            <h5 className='font-vol text-base text-secondary'>{title}</h5>
            <h2 className='font-vol text-2xl font-medium text-primary'>{subtitle}</h2>
            <p className='font-jost font-normal text-primary' >{text}</p>
    </div>
  )
}

export default Projectcard