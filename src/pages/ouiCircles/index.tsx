import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Project3.css'
// @ts-ignore
import ScreenShot from '../../images/ouicirclesscreenshot.png'

export default function Project3() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  const h1Ani = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: .5
      }
    },
    hidden: {
      x: -400,
      opacity: 0
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const h3Ani = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: .5
      }
    },
    hidden: {
      x: 400,
      opacity: 0
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const ssAni = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5
      }
    },
    hidden: {
      opacity: 0,
      x: -100
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 1.5,
        delay: .7
      }
    }
  }

  const stackAni = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.3
      }
    },
    hidden: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: 50,
      opacity: 0,
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
      opacity: 0,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div 
      variants={pageAni}
      initial={"initial"}
      exit={"exit"}
      className='project proj3' 
      id='ouiCircles'
    >
      <motion.h1
        ref={ref}
        variants={h1Ani}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
      >
        ouiCircles
      </motion.h1>
      <motion.h3
        ref={ref}
        variants={h3Ani}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
      >
        Community Forum
      </motion.h3>
      <Link to={'/ouicircles+'}>
        <motion.img 
          ref={ref} 
          variants={ssAni}
          initial={"hidden"} 
          animate={"visible"}
          exit={"exit"}
          className='ouiSS' 
          src={ScreenShot} 
          alt='ouiCircles' 
        />
      </Link>
      <motion.div 
        ref={ref}
        variants={stackAni}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
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
      <Link to={`/ouicircles+`}>
        <motion.button 
          ref={ref}
          variants={btnAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='btn' 
          type='button'
        >
          Details
        </motion.button>
      </Link>
      </div>
    </motion.div>
  )
}
