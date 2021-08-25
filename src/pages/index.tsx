import * as React from 'react'
import Logo from '../components/Logo'
import Typewriter from 'typewriter-effect'
import Preview from '../components/Preview'
import Footer from '../components/Footer'
// styles
import '../../index.css'
// markup
const IndexPage = () => {

  return (
    <div className='mainPage'>
      <Logo />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(`Hello, I'm Hiroto Robinson, a Full-Stack Web Developer based out of Seattle, Washington.`)
            .start();
        }}
        options={{
          delay: 40,
          deleteSpeed: 20
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(5000)
            .typeString(`I have a love for puzzles, solving complex problems, and perpetual learning.`)
            .start()
        }}
        options={{
          delay: 40
        }}
      />
      <Preview />
      <Footer />
    </div>
  )
}

export default IndexPage
