import React from 'react'
// @ts-ignore
import logo from '../../images/MainLogo.png'
import './Logo.css'
export default function Logo() {
  return (
    <div className="wrapper">
      <img className="mainLogo"src={logo} alt="Main Logo" />
    </div>
  )
}
