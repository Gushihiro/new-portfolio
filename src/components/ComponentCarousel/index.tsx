import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './ComponentCarousel.css'

import Header from '../Header'
import AboutPreview from '../AboutPreview'
import AboutDetails from '../../pages/AboutMe'
import Project1 from '../Project1'
import KinetikDetails from '../../pages/Kinetik'
import Project2 from '../Project2'
import CrudDetails from '../../pages/ContactCRUD'
import Project3 from '../Project3'
import ouiCirclesDetails from '../../pages/ouiCircles'
import Project4 from '../Project4'
import VedomyDetails from '../../pages/Vedomy'


export default function ComponentCarousel() {

  const location = useLocation();

  console.log()

  let scrolling = false;

  window.scroll = () => {
    scrolling = true;
  };

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
    }
  }, 300)

  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <Switch location={location} key={location.pathname}>
        <Route path='/vedomy' component={Project4} />
        <Route path='/vedomy+' component={VedomyDetails} />
        <Route path='/ouicircles' component={Project3} />
        <Route path='/ouicircles+' component={ouiCirclesDetails} />
        <Route path='/contacts-crud' component={Project2} />
        <Route path='/contacts-crud+' component={CrudDetails} />
        <Route path='/kinetik' component={Project1} />
        <Route path='/kinetik+' component={KinetikDetails} />
        <Route path='/about' component={AboutPreview} />
        <Route path='/about+' component={AboutDetails} />
        <Route path='/' component={Header} />
      </Switch>
    </AnimatePresence>
  )

  // switch(currentFrame) {
  //   case "Header":
  //     return (
  //       <AnimatePresence
  //         exitBeforeEnter
  //       >
  //         <Header />
  //       </AnimatePresence>
  //     );
  //   case "AboutMe":
  //     return (
  //       <AnimatePresence
  //         exitBeforeEnter
  //       >
  //         <AboutPreview />
  //       </AnimatePresence>
  //     );
  //   case "Kinetik":
  //     return (
  //       <AnimatePresence
  //         exitBeforeEnter
  //       >
  //         <Project1 />
  //       </AnimatePresence>
  //     );
  //   case "ContactsCRUD":
  //     return <Project2 />;
  //   case "ouiCircles":
  //     return <Project3 />;
  //   case "Vedomy":
  //     return <Project4 />;
  //   default:
  //     return <Header />;
  // }
}



