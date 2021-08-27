import React from 'react'
import './Project1.css'
import { Link } from 'gatsby'
import ScreenShot from '../../images/kinetikSS.png'
export default function Project1() {
  return (
    <div className='project proj1' id='kinetik'>
      <h1>Kinetik</h1>
      <h3>Web App</h3>
      <img className='kinetikSS' src={ScreenShot} alt='Kinetik' />
      <div className='proj1Info'>
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>React </h4>
        <h4>|</h4>
        <h4>NodeJS </h4>
      </div>
      <div className='proj1Btn'>
      <Link to={`/Kinetik`}>
        <button className='btn' type='button'>Details</button>
      </Link>
      </div>
    </div>
  )
}
