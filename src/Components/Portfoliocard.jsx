import React from 'react'
import Images from '../Components/Images'
import port_one from '../assets/about-1.jpg'
import Flex from '../Components/Flex'


const Portfoliocard = ({src,title,subtitle,className}) => {
  return (
   
     <div className=' group relative w-[570px] h-[520px] pt-10'>
        <Images className="w-full h-full" src={src}/>
        <div className='absolute bottom-[4px] left-0 w-full bg-transparent  group-hover:bg-primary group-hover:duration-300'>
<h3 className={`font-vol font-semibold text-2xl text-transparent group-hover:text-white pl-[18px] pt-[22px] ${className}`}>{title}</h3>
<p className={`font-jost text-base font-normal text-transparent group-hover:text-white/70 pl-[18px] pb-[22px] ${className}`}>{subtitle}</p>
        </div>
    </div>
   
  )
}

export default Portfoliocard