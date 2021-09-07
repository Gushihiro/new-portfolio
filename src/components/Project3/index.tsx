import React from 'react'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Project3.css'
import ScreenShot from '../../images/ouicirclesscreenshot.png'

export default function Project3() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  return (
    <div className='project proj3' id='ouiCircles'>
      <motion.h1
        ref={ref}
        initial={{
          x: -400
        }}
        animate={{
          x: inView ? 0:-400
        }}
        transition={{
          duration: 2,
          delay: 1
        }}
      >
        ouiCircles
      </motion.h1>
      <motion.h3
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
        Community Forum
      </motion.h3>
      <Link to={'/ouiCircles'}>
        <motion.img 
          ref={ref} 
          initial={{
            opacity: 0,
            x: -100
          }} 
          animate={{
            opacity: inView ? 1:0,
            x: inView ? 0: -100
          }} 
          transition={{
            duration: 1.5,
            delay: .2
          }} 
          className='ouiSS' 
          src={ScreenShot} 
          alt='ouiCircles' 
        />
      </Link>
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
        className='proj3Info'
      >
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>Handlebars </h4>
        <h4>|</h4>
        <h4>NodeJS </h4>
      </motion.div>
      <div className='proj3Btn'>
      <Link to={`/ouiCircles`}>
        <motion.button 
          ref={ref}
          initial={{opacity: 0}}
          animate={{opacity: inView ? 1:0}}
          transition={{
            duration: 1,
            delay: 1
          }}
          className='btn' 
          type='button'
        >
          Details
        </motion.button>
      </Link>
      </div>
    </div>
  )
}
