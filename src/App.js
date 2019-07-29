import React from 'react'
import './App.css'
import {
  LabelOutsideCheckBox,
  LabelInsideCheckBox
} from './CheckBoxWithMessage'

function App() {
  return (
    <div className="App">
      <LabelOutsideCheckBox message="Testing Outside" />
      <LabelInsideCheckBox message="Testing Inside" />
    </div>
  )
}

export default App
