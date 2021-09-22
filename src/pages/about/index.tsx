import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/AboutImgSS.jpg'
import './AboutPreview.css'

export default function AboutPreview() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  const ssAni = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5
      }
    },
    hidden: {
      opacity: 0,
      scale: .7
    },
    exit: {
      opacity: 0,
      scale: .7,
      transition: {
        duration: 1.5
      }
    }
  }

  const textAni = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay: .5
      }
    },
    hidden: {
      opacity: 0,
      y: 100
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1.3
      }
    }
  }

  const btnAni = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1
      }
    },
    hidden: {
      opacity: 0
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .7
      }
    }
  }

  const pageAni = {
    initial: {
      y: 0
    },
    exit: {
      y: '-40%',
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div 
      variants={pageAni}
      initial={"inital"}
      exit={"exit"}
      className="aboutPreview" 
      id='about'
    >
      <Link to={'/about+'}>
        <motion.img 
          key={3}
          ref={ref}
          variants={ssAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='aboutPreSS' 
          src={ScreenShot} 
          alt="VSCode" 
        />
      </Link>
      <motion.h1
        key={4}
        ref={ref}
        variants={textAni}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
      >
        I Love Innovation, Efficiency, and Story
      </motion.h1>
      <div className='aboutBtn'>
        <Link to={'/about+'}>
          <motion.button 
            key={5}
            ref={ref}
            variants={btnAni}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='abBtn' 
            type='button'
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}
