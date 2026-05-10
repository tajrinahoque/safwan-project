import React from 'react'
import Navbar from './Layouts/Navbar'
import Banner from './Layouts/Banner'
import Service from './Layouts/Service'
import About from './Layouts/About'
import Project from './Layouts/Project'
import Portfolio from './Layouts/Portfolio'




const App = () => {
  return (

  <div>
    <Navbar/>
    <Banner/>
    <Service/>
    <About/>
    <Project/>
    <Portfolio/>
  </div>


  )
}

export default App