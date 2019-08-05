// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Login from '../Login'

test('allows the user to login successfully', async () => {
  // mock out window.fetch for the test
  const fakeUserResponse = { token: 'fake_user_token' }
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse)
    })
  })
  let renderData

  renderData = render(<Login />)
  const { getByLabelText, getByText, findByRole } = renderData

  fireEvent.change(getByLabelText(/username/i), {
    target: { value: 'vaishakkallore.in' }
  })
  // fireEvent.change(getByPlaceholderText(/username/i), {value: 'vaishak@kallore.in'})

  // fill out the form

  fireEvent.click(getByText(/Login/i))
  // just like a manual tester, we'll instruct our test to wait for the label
  // to show up before continuing with our assertions.
  const loginMessage = await findByRole('alert')
  // console.log(loginMessage)
  console.log(loginMessage.innerHTML)
  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(loginMessage).toHaveTextContent(/Success/i)
  expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
})
