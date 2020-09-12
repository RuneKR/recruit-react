/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should render Menu', () => {
    const { getByTestId } = render(
      <Header title="Menu" toggleMenu={(): void => {}} />
    )
    expect(screen.getByText('Menu')).toBeTruthy()
    expect(getByTestId('MenuIcon')).toBeTruthy()
  })

  it('should render Arrow when isMenuShowing prop is true', () => {
    const { getByTestId } = render(
      <Header title="Menu" toggleMenu={(): void => {}} isMenuShowing />
    )
    expect(getByTestId('ArrowBackIcon')).toBeTruthy()
  })

  it('should call toggle when menu icon clicks', () => {
    const toggle = jest.fn()
    const { getByRole } = render(
      <Header title="Menu" toggleMenu={toggle} isMenuShowing />
    )
    fireEvent.click(getByRole('menu'))

    expect(toggle).toBeCalled()
  })
})
