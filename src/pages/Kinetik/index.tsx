import React from 'react'
import './Project1.css'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/kinetikSS.png'
// @ts-ignore
import frontImg from '../../images/kinetic-logo.png'
export default function Project1() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  return (
    <div className='project proj1' id='kinetik'>
      <motion.h1 
        key={6}
        ref={ref}
        initial={{
          x: -400
        }}
        animate={{
          x: inView ? 0:-400
        }}
        exit={{
          x: -400
        }}
        transition={{
          duration: 2,
          delay: .5
        }}
      >
        Kinetik
      </motion.h1>
      <motion.h3
        key={7}
        ref={ref}
        initial={{
          opacity: 0,
          x: 400
        }}
        animate={{
          opacity: inView ? 1:0,
          x: inView ? 0:400
        }}
        exit={{
          opacity: 0,
          x: 400
        }}
        transition={{
          duration: 2,
          delay: .5
        }}
      >
        Web App
      </motion.h3>
      <Link to={`/kinetik+`}>
        <motion.img 
          key={8}
          ref={ref} 
          initial={{
            opacity: 0,
            x: -100
          }} 
          animate={{
            opacity: inView ? 1:0,
            x: inView ? 0: -100
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 1.5
          }} 
          className='kinetikSS' 
          src={ScreenShot} 
          alt='Kinetik' 
        />
      </Link>
      <motion.div 
        key={9}
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
          duration: 1.5,
          delay: 1.3
        }}
        className='proj1Info'
      >
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>React </h4>
        <h4>|</h4>
        <h4>NodeJS </h4>
      </motion.div>
      <div className='proj1Btn'>
      <Link to={`/kinetik+`}>
        <motion.button
          key={10}
          ref={ref}
          initial={{opacity: 0}}
          animate={{opacity: inView ? 1:0}}
          exit={{opacity: 0}}
          transition={{
            duration: 1,
            delay: .7
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
