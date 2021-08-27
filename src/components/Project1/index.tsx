import React from 'react'
import './Project1.css'
import ScreenShot from '../../images/kinetikSS.png'
export default function Project1() {
  return (
    <div className='project proj1'>
      <h1>Kinetik</h1>
      <h3>Web App</h3>
      <img className='kinetikSS' src={ScreenShot} alt='Kinetik' />
      <div className='proj1Info'>
        <h2>Technologies</h2>
        <p>ReactJS | </p>
        <button>More Info</button>
      </div>
    </div>
  )
}
