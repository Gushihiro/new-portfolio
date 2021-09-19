import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ScreenShot from '../../images/AboutImgSS.jpg'
import './AboutPreview.css'

export default function AboutPreview() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  const ssAni = {
    visible: {
      
    }
  }

  return (
    <div className="aboutPreview" id='about'>
      <Link to={'/about+'}>
        <motion.img 
          key={3}
          ref={ref}
          initial={{
            opacity: 0,
            scale: .7
          }}
          animate={{
            opacity: inView ? 1:0,
            scale: inView ? 1:.7
          }}
          exit={{
            opacity: 0,
            scale: .7
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
        key={4}
        ref={ref}
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: inView ? 1:0,
          y: inView ? 0:100
        }}
        exit={{
          opacity: 0,
          y: 100
        }}
        transition={{
          duration: 1.3,
          delay: .3
        }}
      >
        I Love Innovation, Efficiency, and Story
      </motion.h1>
      <div className='aboutBtn'>
        <Link to={'/about+'}>
          <motion.button 
            key={5}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1:0 }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 1,
              delay: .7
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
