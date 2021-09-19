import React from 'react'
import './Project4.css'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ScreenShot from '../../images/vedomyscreenshot.png'
export default function Project4() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  return (
    <div className='project proj4' id='vedomy'>
      <div className='proj4Btn'>
        <Link to={`/vedomy+`}>
          <motion.button 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1:0 }}
            transition={{
              duration: 2,
              delay: 1.5
            }}
            className='btn' 
            type='button'
          >
            Details
          </motion.button>
        </Link>
      </div>
      <motion.h1
        ref={ref}
        initial={{
          opacity: 0,
          x: 400
        }}
        animate={{
          opacity: inView ? 1:0,
          x: inView ? 0:400
        }}
        transition={{
          duration: 2,
          delay: 1
        }}
      >
        Vedomy
      </motion.h1>
      <motion.h3
        ref={ref}
        initial={{
          opacity: 0,
          x: -400
        }}
        animate={{
          opacity: inView ? 1:0,
          x: inView ? 0:-400
        }}
        transition={{
          duration: 2,
          delay: 1
        }}
      >
        Web App
      </motion.h3>
      <motion.img 
        ref={ref}
        initial={{
          opacity: 0,
          x: 100
        }}
        animate={{
          opacity: inView ? 1:0,
          x: inView ? 0:100
        }}
        transition={{
          duration: 1.5,
          delay: .2
        }} 
        className='vedomySS' 
        src={ScreenShot} 
        alt='Vedomy' 
      />
      <motion.div 
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
          duration: 1.5,
          delay: 1.3
        }}
        className='proj4Info'
      >
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>JavaScript </h4>
        <h4>|</h4>
        <h4>NodeJS</h4>
      </motion.div>
    </div>
  )
}
