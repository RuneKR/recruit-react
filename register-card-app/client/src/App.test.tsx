import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App should', () => {
  it('renders Layout', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('Layout')).toBeTruthy()
  })
})
