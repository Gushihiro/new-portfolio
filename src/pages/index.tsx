import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Components
import ComponentCarousel from '../components/ComponentCarousel'
import Header from '../components/Header'
import AboutPreview from '../components/AboutPreview'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Project4 from '../components/Project4'
import NavMini from '../components/NavMini'
import Footer from '../components/Footer'

// Images
//@ts-ignore
import Spacer2 from '../images/wavetopspacer.svg'

// Styles
import '../../index.css'

// markup
const IndexPage = () => {

  const [currentFrame, setCurrentFrame] = useState("Header")

  const { ref, inView } = useInView({
    rootMargin: '0px',
  })

  useEffect(() => {
    currentFrame;
  }, [setCurrentFrame])

  const allFrames = [
    "Header", 
    "AboutMe", 
    "Kinetik", 
    "ContactsCRUD",
    "ouiCircles",
    "Vedomy"
  ]

  return (
    <Router>
    <AnimatePresence
      exitBeforeEnter
    >
      <motion.div
        animate={{ opacity: 1}} 
        initial={{ opacity: 0}}
        transition={{ duration: 1.1 }} 
        className='mainPage'
      >
        <ComponentCarousel />
        <NavMini
          currentFrame={currentFrame}
          setCurrentFrame={setCurrentFrame}
        />
      </motion.div>
    </AnimatePresence>
    </Router>
  )
}

export default IndexPage
