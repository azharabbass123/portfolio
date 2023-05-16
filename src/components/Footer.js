import './FooterStyles.css'
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='left'>
            <h3>Contact</h3>
            <FaHome size={20}/>
            <h4>Lahore, Pakistan </h4>
            <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} />1234-221231</h4>
            <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} />abc@xyz.com</h4>
        </div>
        <div className='right'>
        <h3>Social links</h3>
            <NavLink to={'https://google.com'} >
            <FaFacebook size={20} style={{color: '#fff', marginRight: '2rem',}} />
            </NavLink>
            <FaLinkedin size={20} style={{color: '#fff', marginRight: '2rem'}} />
            <FaTwitter size={20} style={{color: '#fff', marginRight: '2rem'}} />
            
        </div>
    </div>
  )
}

export default Footer