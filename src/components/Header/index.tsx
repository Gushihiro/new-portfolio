import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Components
import Logo from '../Logo'

// Images
// @ts-ignore
import Spacer from '../../images/wavebackground2.svg'

// Styles
import './Header.css'

// markup
const Header = () => {

  const { ref, inView } = useInView({
    rootMargin: '0px',
  })

  const scrollAni = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1
      }
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1.5,

      }
    },
  }

  const spacerAni = {
    visible: {
      y: 0,
      transition: {
        duration: 1.2
      }
    },
    hidden: {
      y: '-75vh'
    },
    exit: {}
  }

  const pageAni = {
    initial: {
      y: 0
    },
    exit: {
      y: '-40%',
      transition: {
        duration: 1.5,
        delay: 1
      }
    }
  }

  return (
      <motion.div 
        variants={pageAni}
        initial={"inital"}
        exit={"exit"}
        className='header'
      >
        <Logo />
        <div className='navContent'>
          <motion.p
            key={1}
            ref={ref}
            variants={scrollAni}
            animate={"visible"}
            initial={"hidden"}
            exit={"hidden"}
          >
            //Scroll Down
          </motion.p>
        </div>
        <motion.img 
          key={2}
          variants={spacerAni}
          initial={"hidden"}
          animate={"visible"} 
          className='spacer' 
          src={Spacer} 
          alt="space" 
        />      
      </motion.div>
    )
}

export default Header;