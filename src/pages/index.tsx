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
  const { ref, inView } = useInView({
    rootMargin: '0px',
  })

  return (
    <Router>
    <AnimatePresence
      exitBeforeEnter
    >
      <ReactScrollWheelHandler
        upHandler={async ()=> {
          console.log(frameIdx)
          frameIdx > 0 ? await setFrameIdx(frameIdx - 1):null;
          console.log(frameIdx)
          await setCurrentFrame(allFrames[frameIdx])
        }}
        downHandler={async ()=> {
          console.log(frameIdx)
          frameIdx < 5 ? await setFrameIdx(frameIdx + 1):null;
          console.log(frameIdx)
          await setCurrentFrame(allFrames[frameIdx])
        }}
      >
      <motion.div
        animate={{ opacity: 1}} 
        initial={{ opacity: 0}}
        transition={{ duration: 1.1 }} 
        className='mainPage'
      >
        <ComponentCarousel 
          currentFrame={currentFrame}
        />
        <NavMini
          currentFrame={currentFrame}
          setCurrentFrame={setCurrentFrame}
          setFrameIdx={setFrameIdx}
        />
      </motion.div>
      </ReactScrollWheelHandler>
    </AnimatePresence>
    </Router>
  )
}

export default IndexPage
