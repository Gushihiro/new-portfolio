import React from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './ComponentCarousel.css'

import Header from '../Header'
import AboutPreview from '../../pages/about'
import AboutDetails from '../../pages/about+'
import Project1 from '../../pages/kinetik'
import KinetikDetails from '../../pages/kinetik+'
import Project2 from '../../pages/contacts-crud'
import CrudDetails from '../../pages/contacts-crud+'
import Project3 from '../../pages/ouicircles'
import ouiCirclesDetails from '../../pages/ouicircles+'
import Project4 from '../../pages/vedomy'
import VedomyDetails from '../../pages/vedomy+'


export default function ComponentCarousel({ currentFrame }: any) {
  const location = useLocation();
  
  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <Switch location={location} key={location.pathname}>
        <Route exact path='/vedomy+' component={VedomyDetails} />
        <Route exact path='/vedomy' component={Project4} />
        <Route exact path='/ouicircles+' component={ouiCirclesDetails} />
        <Route exact path='/ouicircles' component={Project3} />
        <Route exact path='/contacts-crud+' component={CrudDetails} />
        <Route exact path='/contacts-crud' component={Project2} />
        <Route exact path='/kinetik+' component={KinetikDetails} />
        <Route exact path='/kinetik' component={Project1} />
        <Route exact path='/about+' component={AboutDetails} />
        <Route exact path='/about' component={AboutPreview} />
        <Route exact path='/' component={Header} />
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



