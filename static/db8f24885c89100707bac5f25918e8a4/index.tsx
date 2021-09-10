import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import ScreenShot from '../../images/contactCrudSS.png'
import './ContactCRUD.css'
import DesktopView from '../../images/crudView.png'
import ScreenShotPage from '../../images/crudSSpage.png'
import Footer from '../../components/Footer'
const ContactCrudPage = () => {

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 1.1
      }}
      className='contactcrudPage'
    >
      <div className='project proj2'>
        <div className='proj2Btn'>
          <Link to={`https://gushihiro.github.io/contacts-crud/`} target='_blank'>
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
          <Link to={`https://github.com/Gushihiro/contacts-crud`} target='_blank'>
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
          Contact CRUD
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
        <Link to={`/#contacts-crud`}>
          <button className='backBtn2' type='button'>Back</button>
        </Link>
        <Link to={`https://gushihiro.github.io/contacts-crud/`} target='_blank'>
          <img className='crudSS' src={ScreenShot} alt='Contacts-CRUD' />
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
          className='proj2Info'
        >
            <h4>MySQL </h4>
            <h4>|</h4>
            <h4>Express </h4>
            <h4>|</h4>
            <h4>React </h4>
            <h4>|</h4>
            <h4>NodeJS </h4>
        </motion.div>
      </div>
      <div className='crudDetail'>
        <img className='crudDesktop' src={DesktopView} alt='Desktop'/>
        <h1>CRUD Application Utilizing Axios-Imported API Contacts</h1>
        <img className='crudSSpage' src={ScreenShotPage} alt='Contacts CRUD' />
        <div className='crudInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>Material-Ui</li>
            <li>TypeScript</li>
            <li>Axios</li>
          </ul>
          <div className='crudMisc'>
            <p>Simple, fully-functioning CRUD application. </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default ContactCrudPage;