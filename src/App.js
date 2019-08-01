import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
        <div style={{ marginBottom: '1rem' }}>
          <Link to="/">Home</Link> <Link to="/login">Login</Link>
        </div>
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
