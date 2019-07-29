import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {
  LabelOutsideCheckBox,
  LabelInsideCheckBox
} from '../CheckBoxWithMessage'

/**
 * Test for input outside label
 */
test('shows the message when the checkbox is checked (outside)', () => {
  const testMessage = 'Test Message outside'
  const { queryByText, getByLabelText, getByText } = render(
    <LabelOutsideCheckBox message={testMessage} />
  )

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(getByLabelText(/Check/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(getByText(testMessage)).toBeInTheDocument()
})

/**
 * Test for input inside the label
 */
test('shows the message when the checkbox is checked (inside)', () => {
  const testMessage = 'Test Message inside'
  const { queryByText, getByLabelText, getByText } = render(
    <LabelInsideCheckBox message={testMessage} />
  )

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  // it also works with empty string (Trimmed!)
  expect(queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(getByLabelText(/See/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(getByText(testMessage)).toBeInTheDocument()
})
