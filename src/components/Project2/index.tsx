import React from 'react'
import './Project2.css'
import { Link } from 'gatsby'
import ScreenShot from '../../images/contactCrudSS.png'
export default function Project2() {
  return (
    <div className='project proj2' id='contacts-crud'>
      <div className='proj2Btn'>
      <Link to={`/ContactCRUD`}>
        <button className='btn' type='button'>Details</button>
      </Link>
      </div>
      <h1>Contact CRUD</h1>
      <h3>Web App</h3>
      <img className='crudSS' src={ScreenShot} alt='Contact CRUD' />
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
  )
}
