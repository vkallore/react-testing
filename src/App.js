import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import {
  LabelOutsideCheckBox,
  LabelInsideCheckBox
} from './CheckBoxWithMessage'
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <LabelOutsideCheckBox message="Testing Outside" />
            <LabelInsideCheckBox message="Testing Inside" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
