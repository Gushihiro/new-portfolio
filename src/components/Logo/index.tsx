import React from 'react'
import { motion } from 'framer-motion'
// @ts-ignore
import logo from '../../images/MainLogo.png'
import './Logo.css'
import { rgb } from 'chalk'
export default function Logo() {
  return (
    <div className="wrapper" id='top'>
      <div className="userName">
        <motion.h1
          initial={{
            opacity: 0,
            x: -700
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5,
            delay: 1
          }}
        >
          Hiroto
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            x: -700
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5,
            delay: 1
          }}
        >
          Robinson
        </motion.h1>
        <motion.h3
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: "3rem"
          }}
          transition={{
            duration: 1.5,
            delay: 2.5
          }}
        >
          Full Stack Web Developer
        </motion.h3>
      </div>
      <motion.div
        initial={{ 
          opacity: 0,
          x: 400
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1.5,
          delay: .7
        }}
        className='logoDiv'
      >
        <img className="mainLogo"src={logo} alt="Main Logo" />
      </motion.div>
    </div>
  )
}
