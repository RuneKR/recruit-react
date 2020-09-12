import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const NumberFormatCustom: React.FC<NumberFormatCustomProps> = ({
  inputRef,
  onChange,
  name,
  ...otherProps
}: NumberFormatCustomProps): JSX.Element => (
  <NumberFormat
    {...otherProps}
    getInputRef={inputRef}
    onValueChange={(values): void => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      })
    }}
    format="#### #### #### ####"
    mask="_"
  />
)

interface CardNumberTextFieldProps {
  cardNumber: string
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CardNumberTextField: React.FC<CardNumberTextFieldProps> = ({
  cardNumber,
  onCardNumberChange,
}: CardNumberTextFieldProps) => {
  return (
    <TextField
      required
      fullWidth
      id="cardNumer"
      label="Credit Card Number"
      value={cardNumber}
      onChange={onCardNumberChange}
      name="cardNumer"
      InputProps={{
        inputComponent: NumberFormatCustom as any,
      }}
      variant="outlined"
      placeholder="Enter Credit Card Number"
    />
  )
}

export default CardNumberTextField
