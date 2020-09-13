import React from 'react'
import { render, RenderResult, fireEvent, act } from '@testing-library/react'
import RegisterForm, { RegisterFormProps, CreditCard } from './RegisterForm'

describe('RegisterForm', () => {
  const onSubmitCallback: (data: CreditCard) => Promise<void> = jest.fn()

  const renderRegisterForm = (): RenderResult => {
    const props: RegisterFormProps = {
      onSubmitCallback,
    }
    return render(<RegisterForm {...props} />)
  }

  it('should render cardNumber field', () => {
    const { getByTestId } = renderRegisterForm()
    expect(getByTestId('input-cardNumber')).toBeTruthy()
  })

  it('should render cvc field', () => {
    const { getByTestId } = renderRegisterForm()

    expect(getByTestId('input-cvc')).toBeTruthy()
  })

  it('should render cvc field', () => {
    const { getByTestId } = renderRegisterForm()

    expect(getByTestId('input-expiryDate')).toBeTruthy()
  })

  it('should render submit button', () => {
    const { getByText } = renderRegisterForm()

    expect(getByText('Submit')).toBeTruthy()
  })

  it('should be able to submit data when data is valid', async () => {
    const { container, getByTestId } = renderRegisterForm()

    const expectedParameter: CreditCard = {
      cardNumber: '4929139878109731',
      cvcNumber: '132',
      expiryDate: '0423',
    }

    fireChangeEvent(container, expectedParameter)

    await act(async () => {
      fireEvent.submit(getByTestId('form'))
    })

    expect(onSubmitCallback).toBeCalledWith(expectedParameter)
  })


  function fireChangeEvent(container: HTMLElement, expectedParameter: CreditCard): void {
    const cardNumberInput = container.querySelector('input#input-cardNumber')
    const cvcInput = container.querySelector('input#input-cvc')
    const expiryDateInput = container.querySelector('input#input-expiryDate')

    if (cardNumberInput !== null &&
      cvcInput !== null &&
      expiryDateInput !== null) {
      fireEvent.change(cardNumberInput, {
        target: { value: expectedParameter.cardNumber },
      })
      fireEvent.change(cvcInput, {
        target: { value: expectedParameter.cvcNumber },
      })
      fireEvent.change(expiryDateInput, {
        target: { value: expectedParameter.expiryDate },
      })
    }
  }
})


