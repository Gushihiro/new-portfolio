import * as React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/vedomyscreenshot.png'
import './Vedomy.css'
// import DesktopView from '../../images/crudView.png'
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
      {/* <div className='vedomyDetail'>
        <img className='vedomyDesktop' src={DesktopView} alt='Desktop'/>
        <h1>A Mobile-First Goal Tracking Web Application</h1>
      </div> */}
    </div>
  )
}

export default VedomyPage;