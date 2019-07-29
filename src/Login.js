import React, { useReducer } from 'react'

const handleSubmit = () => {}

const Login = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="email" name="username" placeholder="Username" />
        </div>
      </form>
    </div>
  )
}

export default Login
