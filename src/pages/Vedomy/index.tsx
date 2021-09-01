import * as React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/vedomyscreenshot.png'
import './Vedomy.css'
import DesktopView from '../../images/vedomyView.png'
import ScreenShotPage from '../../images/vedomySSpage.png'
import Footer from '../../components/Footer'
const VedomyPage = () => {

  return (
    <div className='vedomyPage'>
      <div className='project proj4'>
        <div className='proj4Btn'>
          <Link to={`https://gushihiro.github.io/Vedomy/`} target='_blank'>
            <button className='btn' type='button'>View Site</button>
          </Link>
          <Link to={`https://github.com/Gushihiro/Vedomy`} target='_blank'>
            <button className='btn'>View GitHub</button>
          </Link>
        </div>
        <h1>Vedomy</h1>
        <h3>Web App</h3>
        <Link to={`/#vedomy`}>
          <button className='backBtn2' type='button'>Back</button>
        </Link>
        <Link to={`https://gushihiro.github.io/Vedomy/`} target='_blank'>
          <img className='vedomySS' src={ScreenShot} alt='Vedomy' />
        </Link>
        <div className='proj4Info'>
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>JavaScript </h4>
          <h4>|</h4>
          <h4>NodeJS</h4>
        </div>
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
    </div>
  )
}

export default VedomyPage;