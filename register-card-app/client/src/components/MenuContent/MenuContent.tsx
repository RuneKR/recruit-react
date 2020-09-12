import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
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
export default function MenuContent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h6" className={classes.content}>
            <div>This is menu content</div>
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}
