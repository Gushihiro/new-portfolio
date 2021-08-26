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
// styles
import '../../index.css'
// markup
const IndexPage = () => {

  return (
    <div className='mainPage'>
      <Header>
        <Logo />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`Hello, I'm Hiroto Robinson, a Full-Stack Web Developer based out of Seattle, Washington.`)
              .start()
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
        <div className='skillsList'>
          <h6>
            HTML5 | CSS3 | JavaScript | TypeScript | React | GitHub | git | Express | MySQL | SQL | NoSQL | MongoDB | Bootstrap | Materialize | Material-Ui | Handlebars | jQuery | GatsbyJS
          </h6>
        </div>
      </Header>
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Footer />
    </div>
  )
}

export default IndexPage
