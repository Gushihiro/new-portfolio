import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import ScreenShot from '../../images/vedomyscreenshot.png'
import './Vedomy.css'
import DesktopView from '../../images/vedomyView.png'
import ScreenShotPage from '../../images/vedomySSpage.png'
import Footer from '../../components/Footer'
const VedomyPage = () => {

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 1.1
      }}
      className='vedomyPage'
    >
      <div className='project proj4'>
        <div className='proj4Btn'>
          <Link to={`https://gushihiro.github.io/Vedomy/`} target='_blank'>
          <motion.button
            initial={{opacity: 0, rotateY: 90}}
            animate={{opacity: 1, rotateY: 0}}
            transition={{
              duration: 1.1,
              delay: 1
            }}
            className='btn' 
            type='button'
          >
            View Site
          </motion.button>
          </Link>
          <Link to={`https://github.com/Gushihiro/Vedomy`} target='_blank'>
          <motion.button
            initial={{opacity: 0, rotateY: 90}}
            animate={{opacity: 1, rotateY: 0}}
            transition={{
              duration: 1.1,
              delay: 1.2
            }}
            className='btn'
          >
            View GitHub
          </motion.button>
          </Link>
        </div>
        <motion.h1
          initial={{
            y: -50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.1,
            delay: .5
          }}
        >
          Vedomy
        </motion.h1>
        <motion.h3
          initial={{
            y: -50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.1,
            delay: .5
          }}
        >
          Web App
        </motion.h3>
        <Link to={`/#vedomy`}>
          <button className='backBtn2' type='button'>Back</button>
        </Link>
        <Link to={`https://gushihiro.github.io/Vedomy/`} target='_blank'>
          <motion.img 
            className='vedomySS' 
            src={ScreenShot} 
            alt='Vedomy' 
          />
        </Link>
        <motion.div 
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.1,
            delay: .5
          }}
          className='proj4Info'
        >
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>JavaScript </h4>
          <h4>|</h4>
          <h4>NodeJS</h4>
        </motion.div>
      </div>
      <div className='vedomyDetail'>
        <img className='vedomyDesktop' src={DesktopView} alt='Desktop'/>
        <h1>A Meditation App with Personal Wellness Tracking Applicability </h1>
        <img className='vedomySSpage' src={ScreenShotPage} alt='Vedomy' />
        <div className='vedomyInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>MomentJS</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
          </ul>
          <div className='vedomyMisc'>
            <p>Track your mood, meditate using the animated breathing box, and receive new recipes, yoga poses, and motivational quotes daily.</p>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default VedomyPage;