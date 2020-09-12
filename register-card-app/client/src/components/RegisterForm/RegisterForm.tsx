import React, { useState } from 'react'
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CardNumberTextField from './CardNumberTextField'
import ExpiryDateTextField from './ExpiryDateTextField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    textField: {
      marginBottom: theme.spacing(3),
    },
    paper: {
      maxWidth: 'auto',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      border: 'none',
    },
    content: {
      textAlign: 'center',
    },
  })
)

const RegisterForm: React.FC = () => {
  const classes = useStyles()

  const [cardNumber, setCardNumber] = useState('')
  const [cvcNumber, setCvcNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')

  const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardNumber(e.target.value)
  }

  const onCvcNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCvcNumber(e.target.value)
  }

  const onExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setExpiryDate(e.target.value)
  }

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h6" className={classes.content}>
            <div>Welcome</div>
          </Typography>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} xl={10} sm={8} md={6} lg={4}>
            <form>
              <div className={classes.textField}>
                <CardNumberTextField
                  cardNumber={cardNumber}
                  onCardNumberChange={onCardNumberChange}
                />
              </div>
              <div className={classes.textField}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={6} xl={5} sm={4} md={3} lg={4}>
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
                      placeholder="Enter CVC"
                    />
                  </Grid>
                  <Grid item xs={6} xl={5} sm={4} md={3} lg={4}>
                    <ExpiryDateTextField
                      expiryDate={expiryDate}
                      onExpiryDateChange={onExpiryDateChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.textField}>
                <Button size="large" fullWidth variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default RegisterForm
