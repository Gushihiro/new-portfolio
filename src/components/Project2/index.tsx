import React from 'react'
import './Project2.css'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/contactCrudSS.png'
export default function Project2() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })

  return (
    <div className='project proj2' id='contacts-crud'>
      <div className='proj2Btn'>
      <Link to={`/ContactCRUD`}>
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
      >Contact CRUD</motion.h1>
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
        className='crudSS' 
        src={ScreenShot} 
        alt='Contact CRUD' 
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
        className='proj2Info'>
        <h4>MySQL </h4>
        <h4>|</h4>
        <h4>Express </h4>
        <h4>|</h4>
        <h4>React </h4>
        <h4>|</h4>
        <h4>NodeJS </h4>
      </motion.div>
    </div>
  )
}
