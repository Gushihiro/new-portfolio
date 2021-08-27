import * as React from 'react'
import { Link } from 'gatsby'
import ScreenShot from '../../images/contactCrudSS.png'
import './ContactCRUD.css'
import DesktopView from '../../images/crudView.png'
const ContactCrudPage = () => {

  return (
    <div className='contactcrudPage'>
      <div className='project proj2'>
        <div className='proj2Btn'>
          <Link to={`https://gushihiro.github.io/contacts-crud/`} target='_blank'>
            <button className='btn' type='button'>View Site</button>
          </Link>
          <Link to={`https://github.com/Gushihiro/contacts-crud`} target='_blank'>
            <button className='btn'>View GitHub</button>
          </Link>
        </div>
        <h1>Kinetik</h1>
        <h3>Web App</h3>
        <Link to={`/#contacts-crud`}>
          <button className='backBtn2' type='button'>Back</button>
        </Link>
        <Link to={`https://gushihiro.github.io/contacts-crud/`} target='_blank'>
          <img className='crudSS' src={ScreenShot} alt='Contacts-CRUD' />
        </Link>
        <div className='proj2Info'>
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>React </h4>
          <h4>|</h4>
          <h4>NodeJS </h4>
        </div>
      </div>
      <div className='crudDetail'>
        <img className='crudDesktop' src={DesktopView} alt='Desktop'/>
        <h1>A Mobile-First Goal Tracking Web Application</h1>
      </div>
    </div>
  )
}

export default ContactCrudPage;