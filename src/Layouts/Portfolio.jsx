import React from 'react'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Subheading from '../Components/Subheading'
import Listitems from '../Components/Listitems'
import Flex from '../Components/Flex'
import Images from '../Components/Images'
import port_one from '../assets/about-1.jpg'
import Portfoliocard from '../Components/Portfoliocard'

const Portfolio = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <Flex className="flex-col items-center">
                <Heading text="My Portfolio" />
            <Subheading text="My Work Example" />
            <ul className='flex flex-row gap-x-[31px] items-center pt-6'>
                <Listitems text="All"/>
                <Listitems text="Branding"/>
                <Listitems text="Photography"/>
                <Listitems text="Fashion"/>
                <Listitems text="Product"/>


            </ul>
            </Flex>
            <Flex className="flex-wrap gap-y-[30px] gap-x-[30px]">
            <Portfoliocard src={port_one} title="Motion Graphics" subtitle="Website"/>
            <Portfoliocard src={port_one} title="Motion Graphics" subtitle="Website"/>
            <Portfoliocard src={port_one} title="Motion Graphics" subtitle="Website"/>
            <Portfoliocard src={port_one} title="Motion Graphics" subtitle="Website"/>

            </Flex>


            
        </Container>
    </section>
  )
}

export default Portfolio