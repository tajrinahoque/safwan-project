import React from 'react'
import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Subheading from '../Components/Subheading'
import Flex from '../Components/Flex'
import Cardservice from '../Components/Cardservice'
import Card_One from '../assets/icon1.png'


const Service = () => {
  return (
    <section className='pt-[220px] pb-[120px]'>
      <Container>
        <Flex className='items-center flex-col'>
          <Heading className="text-center " text="MY SERVICES" />
        <Subheading className="pt-3 pb-10 w-[517px] mx-auto text-center" text="Provide Wide Range of Digital Services" />
        </Flex>
        <Flex className="justify-between">
               <Cardservice className="" icon={Card_One} title="Ui/Ux Design" text="Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na
aibus minima veniam." />
        <Cardservice className="" icon={Card_One} title="Ui/Ux Design" text="Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na
aibus minima veniam." />
        <Cardservice className="" icon={Card_One} title="Ui/Ux Design" text="Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum na
aibus minima veniam." />
        </Flex>
   
      </Container>
    </section>
  )
}

export default Service