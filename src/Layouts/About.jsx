import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Heading from '../Components/Heading'
import Subheading from '../Components/Subheading'
import Aboutprog from '../Components/Aboutprog'
import Images from '../Components/Images'
import aboutone from '../assets/about-1.jpg'

const About = () => {
  return (
    <section>
        <Container>
            <Flex className="">
                <div className='w-1/2 flex gap-x-7'>
                <div className='w-7/12'>
                <Images src={aboutone} className="w-full"/>
                </div>
                <Flex className='w-[170px] h-[450px] flex-col gap-y-[30px]'>
                <div className='w-full'>
                <Images src={aboutone} className="w-full h-full"/>
                </div>
                <div className='w-full'>
                <Images src={aboutone} className="w-full h-full"/>
                </div>
                </Flex>
                
                </div>
                <div className='w-1/2'>
                <Heading className="pl-[82px] before:left-[67px] after:left-[28px] after:top-[11px]" text="About Me"/>
                <Subheading text="I Enjoy Solving Problems With Scalable Solutions"/>
                <p className='w-[570px] font-jost font-normal text-base text-primary pt-1 pb-[50px]'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
aeci velit, sed quia non numquam eius modi tempora incidunt lao
magnam aliquam quaerat voluptatem reprehenderit. <br /><br />
<span>Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
reprehenderit non numquam eius.</span></p>
                </div>
            </Flex>
<Flex className=" gap-x-[30px] items-center">
<Aboutprog title="70%" subtitle="Graphic Design"/>
<Aboutprog title="85%" subtitle="Web Designing"/>
<Aboutprog title="60%" subtitle=" Brand Design"/>
<Aboutprog title="40%" subtitle="Web Development"/>

</Flex>

        </Container>
    </section>
  )
}

export default About