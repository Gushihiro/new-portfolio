import * as React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/kinetikSS.png'
import './Kinetik.css'
import DesktopView from '../../images/kinetikView.png'
import ScreenShotPage from '../../images/kinetikSSpage.png'
import GoalsSnip from '../../images/kinetikGoals1.png'
import GoalsSnip2 from '../../images/kinetikGoals2.png'
import GoalsSnip3 from '../../images/kinetikGoals3.png'
import CalendarSnip from '../../images/kinetikCalendar.png'
import Footer from '../../components/Footer'
const KinetikPage = () => {

  return (
    <div className='kinetikPage'>
      <div className='project proj1'>
        <h1>Kinetik</h1>
        <h3>Web App</h3>
        <Link to={`/#kinetik`}>
          <button className='backBtn' type='button'>Back</button>
        </Link>
        <Link to={`http://kinetikapp.herokuapp.com/`} target='_blank'>
          <img className='kinetikSS' src={ScreenShot} alt='Kinetik' />
        </Link>
        <div className='proj1Info'>
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>React </h4>
          <h4>|</h4>
          <h4>NodeJS </h4>
        </div>
        <div className='proj1Btn'>
          <Link to={`http://kinetikapp.herokuapp.com/`} target='_blank'>
            <button className='btn' type='button'>View Site</button>
          </Link>
          <Link to={`https://github.com/Gushihiro/Kinetic`} target='_blank'>
            <button className='btn'>View GitHub</button>
          </Link>
        </div>
      </div>
      <div className='kinetikDetail'>
        <img className='kinetikDesktop' src={DesktopView} alt='Desktop'/>
        <h1>A Social Goal Tracking Web Application</h1>
        <img className='kinetikSSPage' src={ScreenShotPage} alt='Kinetik' />
        <div className='kinetikInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>SASS</li>
            <li>React Calendar</li>
            <li>MomentJS</li>
            <li>Axios</li>
            <li>Bootstrap</li>
            <li>Material-Ui</li>
            <li>Nodemailer</li>
            <li>JSONWebtoken</li>
            <li>BCrypt</li>
            <li>Sequelize</li>
          </ul>
          <div className='kinetikGoal'>
            <h2>Kinetik allows for a variety of options for goal tracking.</h2>
            <div className='goalDiv'>
              <img className='goalSnip' src={GoalsSnip} alt='Kinetik Goals Options' />
              <img className='goalSnip2' src={GoalsSnip2} alt='Kinetik Goals Options' />
              <img className='goalSnip3' src={GoalsSnip3} alt='Kinetik Goals Options' />
            </div>
          </div>
          <div className='kinetikCal'>
            <h2>Use the Calendar to Track Your Progress</h2>
            <img className='calendarSnip' src={CalendarSnip} alt='Kinetik Calendar' />
            <div className='calendarMisc'>
              <p>The calendar displays what days you've completed your goals. If even a single goal is left unfinished, the day is marked with a red dot. If you complete all your goals, a blue.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default KinetikPage;