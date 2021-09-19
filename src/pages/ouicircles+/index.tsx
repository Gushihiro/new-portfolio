import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScreenShot from '../../images/ouicirclesscreenshot.png'
import './ouiCircles.css'
import DesktopView from '../../images/circlesView.png'
import ScreenShotPage from '../../images/ouiSSpage.png'
import Footer from '../../components/Footer'
const ouiCirclesPage = () => {

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 1.1
      }}
      className='ouiCirclesPage'
    >
      <div className='project proj3'>
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
          ouiCircles
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
          Community Forum
        </motion.h3>
        <Link to={`/ouicircles`}>
          <button className='backBtn' type='button'>Back</button>
        </Link>
        <Link to={'http://oui-circle-app.herokuapp.com/'} target='_blank'>
          <img className='ouiSS' src={ScreenShot} alt='ouiCircles' />
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
        <Link to={`http://oui-circle-app.herokuapp.com/`} target='_blank'>
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
        <Link to={`https://github.com/Gushihiro/ouiCircles-Community-Bulletin`} target='_blank'>
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
      </div>
      <div className='circlesDetail'>
        <img className='circlesDesktop' src={DesktopView} alt='Desktop'/>
        <h1>Community Forum Utilizing Geospatial Data to Provide Local Events to Users</h1>
        <img className='ouiSSpage' src={ScreenShotPage} alt='Contacts CRUD' />
        <div className='ouiInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>Sequelize</li>
            <li>Cloudinary</li>
            <li>Bcrypt</li>
            <li>Handlebars</li>
            <li>GeoIp / GeoLocation</li>
            <li>MomentJS</li>
          </ul>
          <h2>Find local events or create your own</h2>
          <div className='ouiMisc'>
            <p>Events within a 15-mile radius will display on your front page.</p>
            <p>Leave a comment on events you want to attend or think are exciting.</p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default ouiCirclesPage;