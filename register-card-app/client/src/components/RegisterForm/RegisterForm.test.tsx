import React from 'react'
import { render } from '@testing-library/react'
import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  it('should render cardNumber field', () => {
    const { getByTestId } = render(<RegisterForm />)

    expect(getByTestId('input-cardNumber')).toBeTruthy()
  })

  it('should render cvc field', () => {
    const { getByTestId } = render(<RegisterForm />)

    expect(getByTestId('input-cvc')).toBeTruthy()
  })

  it('should render cvc field', () => {
    const { getByTestId } = render(<RegisterForm />)

    expect(getByTestId('input-expiryDate')).toBeTruthy()
  })

  it('should render submit button', () => {
    const { getByText } = render(<RegisterForm />)

    expect(getByText('Submit')).toBeTruthy()
  })
})
