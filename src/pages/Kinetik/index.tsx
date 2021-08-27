import * as React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/kinetikSS.png'
import './Kinetik.css'
const KinetikPage = () => {

  return (
    <div className='kinetikPage'>
      <div className='project proj1'>
        <h1>Kinetik</h1>
        <h3>Web App</h3>
        <Link to={`/#kinetik`}>
          <button className='backBtn' type='button'>Back</button>
        </Link>
        <img className='kinetikSS' src={ScreenShot} alt='Kinetik' />
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
        <h1>Details</h1>
      </div>
    </div>
  )
}

export default KinetikPage;