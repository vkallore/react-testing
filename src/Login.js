import React, { useReducer } from 'react'

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'disable' })
    dispatch({ type: 'set_message', message: null })

    const { usernameInput } = e.target.elements

    window
      .fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameInput.value
        })
      })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'enable' })
        dispatch({ type: 'set_message', message: 'Success' })
        window.localStorage.setItem('token', data.token)
      })
      .catch(e => {
        dispatch({ type: 'enable' })
        const message = e.toString()
        dispatch({ type: 'set_message', message })
      })
  }

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'disable':
          return { ...state, processing: true }
        case 'enable':
          return { ...state, processing: false }
        case 'set_message':
          return { ...state, message: action.message }
        default:
          return state
      }
    },
    {
      processing: false,
      message: null
    }
  )
  const { processing, message } = state
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usernameInput">Username:</label>
          <input
            disabled={processing}
            type="email"
            name="username"
            placeholder="Enter your username"
            id="usernameInput"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
        <div className="form-group">
          {message === null ? null : (
            <>
              {' '}
              <span role="alert">{message}</span>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
