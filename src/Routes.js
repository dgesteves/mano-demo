import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Contacts from './components/Contacts'

function Routes () {
  return (
    <Switch>
      <Redirect exact from="/mano-demo" to="/"/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/experience'>
        <Experience/>
      </Route>
      <Route path='/work'>
        <Work/>
      </Route>
      <Route path='/contacts'>
        <Contacts/>
      </Route>
    </Switch>
  )
}

export default Routes
