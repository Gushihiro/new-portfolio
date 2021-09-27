import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import './AboutMe.css'

const AboutMePage = ({ setDetailPage }:any) => {

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 1.1
      }}
      className='aboutMePage'
  >
      <h1 className='aboutTitle'>About Me Page</h1>
      <div className='aboutInfo'>
        <p>
          I'm Hiroto Robinson, a certified Full-Stack Web Developer with a passion for learning and a love for solving puzzles.
        </p>
        <p>
          I'm always searching for ways to improve, continue to develop skills, and obtain new knowledge in every facet of my life.
        </p>
        <p>
          As a team-oriented programmer, I believe I can be an asset to any company looking for a strong, motivated developer.
        </p>
        <h2>Contact Me @ robinsonhiroto@gmail.com</h2>
        <p>
          
        </p>
      </div>
      <Link to={`/about`}>
        <button 
          className='aboutBack' 
          type='button'
          onClick={()=>setDetailPage(false)}
        >
          Back
        </button>
      </Link>
      <Footer />
    </motion.div>
  )
}

export default AboutMePage;