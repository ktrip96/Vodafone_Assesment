import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Main from './Components/Main'
import Page2 from './Components/Page2'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Main}/>
        <Route path = '/page2' component={Page2}/>
      </Switch>
    </Router>
  )
}
