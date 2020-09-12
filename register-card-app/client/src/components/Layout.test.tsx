import React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
// import { renderHook, act } from '@testing-library/react-hooks'
import Layout from './Layout';

describe('Layout', () => {
  it('should render Header', () => {
    const { getByTestId } = render(<Layout />)
    expect(getByTestId('Header')).not.toBeNull();
  });

  it('should toggle menu', async () => {
    render(<Layout />) 
    fireEvent.click(screen.getByRole('menu'))

    await waitFor(() => screen.getByTestId('ArrowBackIcon'))

    expect(screen.getByTestId('ArrowBackIcon')).toBeTruthy();
  })
});