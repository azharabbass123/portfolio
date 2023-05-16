import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import DisplayResume from '../components/DisplayResume';


 const Resume = () => {
  const active = 3;
  return (
    <div>
      <Navbar activeEl= {active} />
      <DisplayResume />
      <Footer />
    </div>
  )
}
export default Resume
