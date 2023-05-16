import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

 const About = () => {
  const active = 2
  return (
    <div>
      <Navbar activeEl={active} />
      <Footer />
    </div>
  )
}
export default About