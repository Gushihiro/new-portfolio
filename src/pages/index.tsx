import * as React from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Typewriter from 'typewriter-effect'
import Preview from '../components/Preview'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Project4 from '../components/Project4'
import Footer from '../components/Footer'
import Spacer from '../images/wavebackground2.svg'
import Spacer2 from '../images/wavetopspacer.svg'
// styles
import '../../index.css'
// markup
const IndexPage = () => {

  return (
    <div className='mainPage'>
      <Header>
        <Logo />
        <div className='navContent'>
          <p>//Scroll Down</p>
        </div>
        <img className='spacer' src={Spacer} alt="space" />      
      </Header>
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
        <img className='spacer2' src={Spacer2} alt="space" />
      <Footer />
    </div>
  )
}

export default IndexPage
