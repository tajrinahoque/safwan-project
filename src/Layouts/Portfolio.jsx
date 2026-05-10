import React from 'react'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Subheading from '../Components/Subheading'
import Listitems from '../Components/Listitems'
import Flex from '../Components/Flex'

const Portfolio = () => {
  return (
    <section>
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
        </Container>
    </section>
  )
}

export default Portfolio