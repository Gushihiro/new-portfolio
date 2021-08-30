import React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/AboutImgSS.jpg'
import './AboutPreview.css'

export default function AboutPreview() {
  return (
    <div className="aboutPreview" id='about'>
      <h1>About Me</h1>
      <Link to={'/AboutMe'}>
        <img className='aboutPreSS' src={ScreenShot} alt="VSCode" />
      </Link>
      <h1>I Love Innovation, Efficiency, and Story</h1>
      <div className='aboutBtn'>
        <Link to={'/AboutMe'}>
          <button className='abBtn' type='button'>Learn More</button>
        </Link>
      </div>
    </div>
  )
}
