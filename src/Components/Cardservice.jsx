import React from 'react'
import Images from '../Components/Images'
import { FaArrowRightLong } from "react-icons/fa6";

const Cardservice = ({icon,title,text,className}) => {
  return (
    <div className='group hover:scale-105 duration-200 w-[370px] py-[50px] shadow-xl '>
        <Images className="pl-[35px] pt-12"src={icon}/>
        <h2 className='pl-[30px] pt-[26px] pb-4 font-vol font-extrabold text-2xl text-primary'>{title}</h2>
        <p className='pb-[30px] w-[245px] pl-[30px] font-jost font-normal text-base text-[#00413db3]'>{text}</p>
        <FaArrowRightLong className="text-primary ml-[30px] group-hover:text-secondary duration-300 text-3xl"/>
        
    </div>
  )
}

export default Cardservice