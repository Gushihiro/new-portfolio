import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './NavMini.css'

export default function NavMini({ setCurrentFrame, currentFrame }: any) {

  const clickTele = () => {

  }

  const allFrames = [
    "Header", 
    "AboutMe", 
    "Kinetik", 
    "ContactsCRUD",
    "ouiCircles",
    "Vedomy"
  ]

  return (
    <div className='navMini'>
      <Link to={'/'}>
        <div
          className='navCont'
          tabIndex={0}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/about'}>
        <div
          className='navCont'
          tabIndex={0}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/kinetik'}>
        <div
          className='navCont'
          tabIndex={0}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/contacts-crud'}>
        <div
          className='navCont'
          tabIndex={0}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/ouicircles'}>
        <div
          className='navCont'
          tabIndex={0}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/vedomy'}>
        <div
          className='navCont'
          tabIndex={0}
        >
          <div className='navLink' />
        </div>
      </Link>
    </div>
  )
}
