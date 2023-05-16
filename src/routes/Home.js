import React from 'react'
import Navbar from '../components/Navbar'
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

 const Home = () => {
  const active = 1;
  return (
    <div>
      <Navbar activeEl={active} />
      <HomeContent />
      <Footer />
    </div>
  )
}
export default Home
