import React from 'react'
import avatar from '../images/avatar2.jpg'
import './HomeContentStyles.css'

const HomeContent = () => {
  return (
    <div className="home-content">
        <img src={avatar} alt='img'></img>
        <h2>Web Developer</h2>
        <p>I'm a principal and technical strategist at Big Medium, where we help teams establish and evolve design systems, establish more collaborative workflows, and create better software together. Need design system help? Need help leveling up your organization's digital practice? Get in touch!</p>
    </div>
  )
}
export default HomeContent
