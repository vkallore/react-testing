import React, { useReducer } from 'react'

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'disable' })
    dispatch({ type: 'set_message', message: null })

    // Random form submit success status
    const dividableByThree = Math.floor(Math.random() * 1000) % 3

    const LoginResponse = new Promise((resolve, reject) => {
      /**
       * Resolves true if the random number divisible by three.
       */
      setTimeout(() => {
        const canResolve = dividableByThree === 0
        if (canResolve) resolve(canResolve)
        reject('Failed!')
      }, 200)
    })
    LoginResponse.then(data => {
      dispatch({ type: 'enable' })
    }).catch(e => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            disabled={processing}
            type="email"
            name="username"
            placeholder="Enter your username"
          />
          {message === null ? null : <br />}
          {message}
        </div>
      </form>
    </div>
  )
}

export default Login
