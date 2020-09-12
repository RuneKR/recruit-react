import React from 'react';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render Menu', () => {
    const { getByTestId } = render(<Header title="Menu" toggleMenu={() => {}}/>)
    expect(screen.getByText("Menu")).not.toBeNull();
    expect(getByTestId('MenuIcon')).not.toBeNull();
  });

  it('should render Arrow when isMenuShowing prop is true', () => {
    const { getByTestId } = render(<Header title="Menu" toggleMenu={() => {}} isMenuShowing/>)
    expect(getByTestId('ArrowBackIcon')).not.toBeNull();
  })

  it('should call toggle when menu icon clicks', () => {
    const toggle = jest.fn();
    const { getByRole } = render(<Header title="Menu" toggleMenu={toggle} isMenuShowing/>)
    fireEvent.click(getByRole('menu'));

    expect(toggle).toBeCalled();
  })
});