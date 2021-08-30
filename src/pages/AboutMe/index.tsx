import * as React from 'react'
import { Link } from 'gatsby'
import './AboutMe.css'
const AboutMePage = () => {

  return (
    <div className='AboutMePage'>
      <h1>About Me Page</h1>
      <Link to={`/#about`}>
          <button type='button'>Back</button>
        </Link>
    </div>
  )
}

export default AboutMePage;