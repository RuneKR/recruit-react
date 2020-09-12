import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'

interface CardNumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const CardNumberFormatCustom: React.FC<CardNumberFormatCustomProps> = ({
  inputRef,
  onChange,
  name,
  ...otherProps
}: CardNumberFormatCustomProps) => (
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
  fontSize?: string
  cardNumber: string
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CardNumberTextField: React.FC<CardNumberTextFieldProps> = ({
  fontSize,
  cardNumber,
  onCardNumberChange,
}: CardNumberTextFieldProps) => {
  return (
    <TextField
      required
      fullWidth
      id="input-cardNumber"
      data-testid="input-cardNumber"
      label="Credit Card Number"
      value={cardNumber}
      onChange={onCardNumberChange}
      name="cardNumer"
      InputProps={{
        style: { fontSize: fontSize },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CardNumberFormatCustom as any,
      }}
      variant="outlined"
      placeholder="Enter Credit Card Number"
    />
  )
}

export default CardNumberTextField
