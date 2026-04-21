import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Images from '../Components/Images'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
      <nav>
       <Container>
         <Flex className="justify-between items-center">
          <Images src={Logo} alt="LOGO"/>
          <div>menu</div>
          <div>button</div>
        </Flex>
       </Container>
      </nav>
  )
}

export default Navbar
