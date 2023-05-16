import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Projects = () => {
  const active = 4;
  return (
    <div>
      <Navbar activeEl={active} />
      <Footer />
    </div>
  )
}

export default Projects