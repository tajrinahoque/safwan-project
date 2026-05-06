import React from 'react'

const Aboutprog = ({title,subtitle}) => {
  return (
    <div className='w-64 h-[282px] shadow-md bg-white relative'>
        <div className='w-[167px] h-[167px] rounded-full border-8 border-[#C4C4C4] absolute top-10 left-10'>
            <h4 className='font-vol font-semibold text-4xl text-secondary absolute top-16 left-10'>{}{title}</h4>
        </div>
        <h5 className='font-vol absolute bottom-[28px] left-11 text-primary font-semibold text-2xl'>{subtitle}</h5>

    </div>
  )
}

export default Aboutprog