import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Typewriter from 'typewriter-effect'
import AboutPreview from '../components/AboutPreview'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Project4 from '../components/Project4'
import Footer from '../components/Footer'
//@ts-ignore
import Spacer from '../images/wavebackground2.svg'
//@ts-ignore
import Spacer2 from '../images/wavetopspacer.svg'
// styles
import '../../index.css'
// markup
const IndexPage = () => {

  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <motion.div 
      animate={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: -300 }}
      transition={{ duration: 1.1 }} 
      className='mainPage'
    >
      <Header>
        <Logo />
        <div className='navContent'>
          <motion.p 
            animate={{y: 0, opacity: 1}} 
            initial={{y: -100, opacity: 0}}
            transition={{ 
              duration: 1.1,
              delay: .7
            }}
          >//Scroll Down</motion.p>
        </div>
        <img className='spacer' src={Spacer} alt="space" />      
      </Header>
      <AboutPreview />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
        <img className='spacer2' src={Spacer2} alt="space" />
      <Footer />
    </motion.div>
  )
}

export default IndexPage
