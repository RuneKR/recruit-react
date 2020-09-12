import React from 'react'
import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'

describe('Layout', () => {

  const renderLayout = () => render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
  it('should render Header', () => {
    const { getByTestId } = renderLayout() 
    expect(getByTestId('Header')).toBeTruthy()
  })

  it('should toggle menu', async () => {
    renderLayout() 
    fireEvent.click(screen.getByRole('menu'))

    await waitFor(() => screen.getByTestId('ArrowBackIcon'))

    expect(screen.getByTestId('ArrowBackIcon')).toBeTruthy()
  })
})
