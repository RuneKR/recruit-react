import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render Menu', () => {
    const { getByTestId } = render(<Header title="Menu" />)
    expect(screen.getByText("Menu")).not.toBeNull();
    expect(getByTestId('MenuIcon')).not.toBeNull();
  });

  it('should render Arrow when isMenuShowing prop is true', () => {
    const { getByTestId } = render(<Header title="Menu" isMenuShowing/>)
    expect(getByTestId('ArrowBackIcon')).not.toBeNull();
  })
});