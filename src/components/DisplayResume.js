import './DisplayResumeStyles.css'
import React from 'react'
import resume from '../images/resume2.jpg'
const DisplayResume = () => {
  return (
    <div className='resume-container'>
        <img src={resume} alt='resume'></img>
    </div>
  )
}

export default DisplayResume