import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'

interface CvcNumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const CvcNumberFormatCustom: React.FC<CvcNumberFormatCustomProps> = ({
  inputRef,
  onChange,
  name,
  ...otherProps
}: CvcNumberFormatCustomProps) => (
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
    format="####"
  />
)

interface CvcNumberTextFieldProps {
  fontSize?: string 
  cvcNumber: string
  onCvcNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CvcNumberTextField: React.FC<CvcNumberTextFieldProps> = ({
  fontSize,
  cvcNumber,
  onCvcNumberChange,
}: CvcNumberTextFieldProps) => {
  return (
    <TextField
      required
      fullWidth
      id="input-cvc"
      data-testid="input-cvc"
      label="CVC"
      value={cvcNumber}
      onChange={onCvcNumberChange}
      name=""
      variant="outlined"
      placeholder="CVC Number"
      InputProps={{
        style: { fontSize },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CvcNumberFormatCustom as any,
      }}
    />
  )
}

export default CvcNumberTextField
