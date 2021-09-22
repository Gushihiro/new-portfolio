import React from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './NavMini.css'

export default function NavMini({ currentFrame, setCurrentFrame, setFrameIdx }: any) {
  
  const history = useHistory();

  const scrollPage = () => {
    
    switch(currentFrame) {
      case "Header":
        history.push('/');
        break;
      case "AboutMe":
        history.push('/about');
        break;
      case "Kinetik":
        history.push('/kinetik')
        break;
      case "ContactsCRUD":
        history.push('/contacts-crud');
        break;
      case "ouiCircles":
        history.push('/ouicircles');
        break;
      case "Vedomy":
        history.push('/vedomy');
        break;
      default:
        return
    }
  }

useEffect(() => {
  scrollPage()
}, [currentFrame])

  return (
    <div className='navMini'>
      <Link to={'/'}>
        <div
          key={10}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(0);
            setCurrentFrame("Header");
          }}
        >
          <div className='navLink'/>
        </div>
      </Link>
      <Link to={'/about'}>
        <div
          key={20}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(1);
            setCurrentFrame("AboutMe");
          }}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/kinetik'}>
        <div
          key={30}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(2);
            setCurrentFrame("Kinetik");
          }}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/contacts-crud'}>
        <div
          key={40}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(3);
            setCurrentFrame("ContactsCRUD");
          }}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/ouicircles'}>
        <div
          key={50}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(4);
            setCurrentFrame("ouiCircles");
          }}
        >
          <div className='navLink' />
        </div>
      </Link>
      <Link to={'/vedomy'}>
        <div
          key={60}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(5);
            setCurrentFrame("Vedomy");
          }}
        >
          <div className='navLink' />
        </div>
      </Link>
    </div>
  )
}
