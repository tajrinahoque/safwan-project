import React from 'react'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Subheading from '../Components/Subheading'
import Images from '../Components/Images'
import Projectcard from '../Components/Projectcard'

const Project = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <Heading text="Recent Projects"/>
            <Subheading text="My Recent Projects"/>
            <Projectcard title="Analytics, UI-Ux" subtitle="Branding & Digital Video Campaign For George’s Cafe" text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry"/>
        </Container>
    </section>
  )
}

export default Project