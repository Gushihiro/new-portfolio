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

  return (
      <div className='header'>
        <Logo />
        <div className='navContent'>
          <motion.p
            key={1}
            ref={ref}
            animate={{y: inView ? 0:-100, opacity: inView ? 1:0}} 
            initial={{y: -100, opacity: 0}}
            exit={{y: -100, opacity: 0}}
            transition={{ 
              duration: 1.5
            }}
          >
            //Scroll Down
          </motion.p>
        </div>
        <motion.img 
          key={2}
          animate={{ y: 0}} 
          initial={{ y: '-50vh'}}
          transition={{ duration: 1.1 }} 
          className='spacer' 
          src={Spacer} 
          alt="space" 
        />      
      </div>
    )
}

export default Header;