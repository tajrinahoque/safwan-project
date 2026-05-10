import React from 'react'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Subheading from '../Components/Subheading'
import Images from '../Components/Images'
import Flex from '../Components/Flex'

import Projectcard from '../Components/Projectcard'
import Button from '../Components/Button'

const Project = () => {
  return (
    <section className='py-[120px]'>
      <Container>
        <Heading className="pb-2" text="Recent Projects" />
        <Subheading className="pb-10" text="My Recent Projects" />
        <Flex className="flex-wrap justify-center gap-x-[30px]">
          <Projectcard title="Analytics, UI-Ux" subtitle="Branding & Digital Video Campaign For George’s Cafe" text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry"/>
          <Projectcard title="Analytics, UI-Ux" subtitle="Branding & Digital Video Campaign For George’s Cafe" text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry"/>
          <Projectcard title="Analytics, UI-Ux" subtitle="Branding & Digital Video Campaign For George’s Cafe" text="Lorem Ipsum Is Simply Dummy Text Of The
Printing And Typesetting Industry"/>
         <Button className="mt-[60px] text-center mx-auto" text="Explore now"/>

        </Flex>
      </Container>
    </section>
  )
}

export default Project