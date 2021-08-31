import * as React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/ouicirclesscreenshot.png'
import './ouiCircles.css'
import DesktopView from '../../images/circlesView.png'
import ScreenShotPage from '../../images/ouiSSpage.png'
import Footer from '../../components/Footer'
const ouiCirclesPage = () => {

  return (
    <div className='ouiCirclesPage'>
      <div className='project proj3'>
        <h1>ouiCircles</h1>
        <h3>Community Forum</h3>
        <Link to={`/#ouiCircles`}>
          <button className='backBtn' type='button'>Back</button>
        </Link>
        <Link to={'http://oui-circle-app.herokuapp.com/'} target='_blank'>
          <img className='ouiSS' src={ScreenShot} alt='ouiCircles' />
        </Link>
        <div className='proj3Info'>
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>Handlebars </h4>
          <h4>|</h4>
          <h4>NodeJS </h4>
        </div>
        <div className='proj3Btn'>
        <Link to={`http://oui-circle-app.herokuapp.com/`} target='_blank'>
          <button className='btn' type='button'>View Site</button>
        </Link>
        <Link to={`https://github.com/Gushihiro/ouiCircles-Community-Bulletin`} target='_blank'>
          <button className='btn'>View GitHub</button>
        </Link>
        </div>
      </div>
      <div className='circlesDetail'>
        <img className='circlesDesktop' src={DesktopView} alt='Desktop'/>
        <h1>Community Forum Utilizing Geospatial Data to Provide Local Events to Users</h1>
        <img className='ouiSSpage' src={ScreenShotPage} alt='Contacts CRUD' />
        <div className='ouiInfo'>
          <h1>Technologies:</h1>
          <ul>
            <li>Sequelize</li>
            <li>Cloudinary</li>
            <li>Bcrypt</li>
            <li>Handlebars</li>
            <li>GeoIp / GeoLocation</li>
            <li>MomentJS</li>
          </ul>
          <h2>Find local events or create your own</h2>
          <p>Events within a 15-mile radius will display on your front page.</p>
          <p>Leave a comment on events you want to attend or think are exciting.</p>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ouiCirclesPage;