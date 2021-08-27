import React from 'react'
// @ts-ignore
import logo from '../../images/MainLogo.png'
import './Logo.css'
export default function Logo() {
  return (
    <div className="wrapper" id='top'>
      <div className="userName">
        <h1>Hiroto</h1>
        <h1>Robinson</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div className='logoDiv'>
        <img className="mainLogo"src={logo} alt="Main Logo" />
        <h1 className="logoText">Portfolio</h1>
      </div>
    </div>
  )
}
