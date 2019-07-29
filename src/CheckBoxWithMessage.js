import React, { useState } from 'react'

const LabelOutsideCheckBox = ({ message }) => {
  const [showMessage, setShowMessage] = useState(false)
  return (
    <LabelContainer>
      <Label htmlFor="showMessage">Check &amp; See the message</Label>
      <input
        type="checkbox"
        id="showMessage"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      <br />
      {showMessage ? message : null}
    </LabelContainer>
  )
}

const LabelInsideCheckBox = ({ message }) => {
  const [showMessage, setShowMessage] = useState(false)
  return (
    <LabelContainer>
      <Label>
        <input
          type="checkbox"
          id="showMessage"
          onChange={e => setShowMessage(e.target.checked)}
          checked={showMessage}
        />
        See the message
      </Label>
      <br />
      {showMessage ? message : ' '}
    </LabelContainer>
  )
}

const LabelContainer = ({ children }) => {
  return <div style={{ padding: '10px' }}>{children}</div>
}

const Label = props => {
  return (
    <label {...props} style={{ cursor: 'pointer' }}>
      {props.children}
    </label>
  )
}

export { LabelOutsideCheckBox, LabelInsideCheckBox }
