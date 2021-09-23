import * as React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import ComponentCarousel from '../components/ComponentCarousel'
import Header from '../components/Header'
import AboutPreview from './about'
import Project1 from './kinetik'
import Project2 from './contacts-crud'
import Project3 from './ouicircles'
import Project4 from './vedomy'
import NavMini from '../components/NavMini'
import Footer from '../components/Footer'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// Images
//@ts-ignore
import Spacer2 from '../images/wavetopspacer.svg'

// Styles
import '../../index.css'

// markup
const IndexPage = () => {

  const allFrames = [
    "Header", 
    "AboutMe", 
    "Kinetik", 
    "ContactsCRUD",
    "ouiCircles",
    "Vedomy"
  ]

  const [frameIdx, setFrameIdx] = useState(0)
  const [currentFrame, setCurrentFrame] = useState("Header")
  const [scrollDir, setScrollDir] = useState("none")
  const { ref, inView } = useInView({
    rootMargin: '0px',
  })

  const handleIncrement = () => {
    setScrollDir("down")
    if (frameIdx < 5) {
      if (scrollDir === "down") {
        setFrameIdx(frameIdx + 1)
        setCurrentFrame(allFrames[frameIdx])
      }
    } else {
      return
    }
  }

  const handleDecrement = () => {
    setScrollDir("up")
    if (frameIdx > 0) {
        setFrameIdx(frameIdx - 1)
        setCurrentFrame(allFrames[frameIdx])
    } else {
      return
    }
  }

  useEffect(() => {
  }, [frameIdx])

  return (
    <Router>
    <AnimatePresence
      exitBeforeEnter
    >
      <ReactScrollWheelHandler
        upHandler={()=> {
          handleDecrement()
        }}
        downHandler={async ()=> {
          handleIncrement()
        }}
        wheelConfig={[7, 100, .05, 0]}
      >
      <motion.div
        animate={{ opacity: 1}} 
        initial={{ opacity: 0}}
        transition={{ duration: 1.1 }} 
        className='mainPage'
      >
        <ComponentCarousel 
          currentFrame={currentFrame}
          scrollDir={scrollDir}
        />
        <NavMini
          currentFrame={currentFrame}
          setCurrentFrame={setCurrentFrame}
          setFrameIdx={setFrameIdx}
          scrollDir={scrollDir}
          frameIdx={frameIdx}
        />
      </motion.div>
      </ReactScrollWheelHandler>
    </AnimatePresence>
    </Router>
  )
}

export default IndexPage
