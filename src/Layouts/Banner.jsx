import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Images from '../Components/Images'
import BannerImage from '../assets/banner.jpg'




const Banner = () => {
  return (
    <section className='bg-primary relative group py-[221px]'>
      <div className='absolute top-0 right-[30px] w-5/12 opacity-0 group-hover:right-0 group-hover:opacity-100 duration-300'>
      <Images className="w-lvw h-[850px]" src={BannerImage}/>
      </div>
        <Container>
            <div>
                <h2 className='leading-[110px] relative z-10 font-vol font-bold text-white text-[100px]'>Hello! <br />I’m Zarror Nibors</h2>
                <p className='w-[670px] font-normal font-jost text-xl text-[#ffffff80] pt-[14px] pb-[50px]'>I’am freelance <span className='text-white'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                <Button text="Contact Me"/>
            </div>
        </Container>
    </section>
  )
}

export default Banner