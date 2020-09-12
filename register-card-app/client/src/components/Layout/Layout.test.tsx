import React from 'react'
import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import Layout from './Layout'
import { BrowserRouter, Route } from 'react-router-dom'

describe('Layout', () => {

  const routes = [
    {
      showMenus: false,
      path: '/1',
    },
    {
      showMenus: true,
      path: '/2',
    },
  ]

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderLayout = () => {
    return render(
      <BrowserRouter>
        <Layout routes={routes}>
          <Route path="/">
            <div>Page 1</div>
          </Route>
          <Route path="/2">
            <div>Page 2</div>
          </Route>
        </Layout>
      </BrowserRouter>
    )
  }

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

  it('should render page 1 before toggling', () => {
    const { getByText } = renderLayout() 

    expect(getByText('Page 1')).toBeTruthy()
  })

  it('should render page 2 when toggling', async () => {
    renderLayout() 

    fireEvent.click(screen.getByRole('menu'))
    await waitFor(() => screen.getByText('Page 2'))

    expect(screen.getByText('Page 2'))
  })
})
