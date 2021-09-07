import React from 'react'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ScreenShot from '../../images/AboutImgSS.jpg'
import './AboutPreview.css'

export default function AboutPreview() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  return (
    <div className="aboutPreview" id='about'>
      <Link to={'/AboutMe'}>
        <motion.img 
          ref={ref}
          initial={{
            opacity: 0,
            scale: .7
          }}
          animate={{
            opacity: inView ? 1:0,
            scale: inView ? 1:.7
          }}
          transition={{
            duration: 1.5
          }}
          className='aboutPreSS' 
          src={ScreenShot} 
          alt="VSCode" 
        />
      </Link>
      <motion.h1
        ref={ref}
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: inView ? 1:0,
          y: inView ? 0:100
        }}
        transition={{
          duration: 1.3,
          delay: 1
        }}
      >I Love Innovation, Efficiency, and Story</motion.h1>
      <div className='aboutBtn'>
        <Link to={'/AboutMe'}>
          <motion.button 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1:0 }}
            transition={{
              duration: 2,
              delay: 1.5
            }}
            className='abBtn' 
            type='button'
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
