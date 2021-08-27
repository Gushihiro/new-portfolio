import React from 'react'
import './Project4.css'
import { Link } from 'gatsby'
import ScreenShot from '../../images/vedomyscreenshot.png'
export default function Project4() {
  return (
    <div className='project proj4' id='vedomy'>
      <div className='proj4Btn'>
        <Link to={`/Vedomy`}>
          <button className='btn' type='button'>Details</button>
        </Link>
      </div>
      <h1>Vedomy</h1>
      <h3>Web App</h3>
      <img className='vedomySS' src={ScreenShot} alt='Vedomy' />
      <div className='proj4Info'>
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>JavaScript </h4>
        <h4>|</h4>
        <h4>NodeJS</h4>
      </div>
    </div>
  )
}
