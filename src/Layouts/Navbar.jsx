import React from 'react'
import Container from '../Components/Container'
import Images from '../Components/Images'
import Logo from '../assets/Logo.png'
import Listitems from '../Components/Listitems'
import Button from '../Components/Button'
import Flex from '../Components/Flex'





const Navbar = () => {
  return (
    <nav>
      <Container>
       <Flex className="justify-between items-center">
         <div>
          <Images src={Logo}/>
        </div>
        <div>
          <ul className='flex gap-x-10'>
            <Listitems text="Home"/>
            <Listitems text="Pages"/>
            <Listitems text="Services"/>
            <Listitems text="Blog"/>
            <Listitems text="Contact"/>


          </ul>
          </div>
        <div>
          <Button text="Download Cv"/>
        </div>
       </Flex>

      </Container>


    </nav>
  )
}

export default Navbar
