import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'



const Banner = () => {
  return (
    <section className='bg-primary relative group py-[221px]'>
      <div className='absolute top-0 right-0 w-5/12 h-full bg-red-500 bg-[url(./)]'>
      </div>
        <Container>
            <div>
                <h2 className='font-vol font-bold text-white text-[100px]'>Hello! <br />I’m Zarror Nibors</h2>
                <p className='w-[670px] font-normal font-jost text-xl text-[#ffffff80] pt-[14px] pb-[50px]'>I’am freelance <span className='text-white'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                <Button text="Contact Me"/>
            </div>
        </Container>
    </section>
  )
}

export default Banner