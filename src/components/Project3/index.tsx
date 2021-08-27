import React from 'react'
import { Link } from 'gatsby'
import './Project3.css'
import ScreenShot from '../../images/ouicirclesscreenshot.png'

export default function Project3() {
  return (
    <div className='project proj3' id='ouiCircles'>
      <h1>ouiCircles</h1>
      <h3>Community Forum</h3>
      <Link to={'/ouiCircles'}>
        <img className='ouiSS' src={ScreenShot} alt='ouiCircles' />
      </Link>
      <div className='proj3Info'>
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>Handlebars </h4>
        <h4>|</h4>
        <h4>NodeJS </h4>
      </div>
      <div className='proj3Btn'>
      <Link to={`/ouiCircles`}>
        <button className='btn' type='button'>Details</button>
      </Link>
      </div>
    </div>
  )
}
