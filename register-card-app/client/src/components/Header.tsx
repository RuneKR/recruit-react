import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

type HeaderProps = {
  title: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header({title = 'Menu'}: HeaderProps) {

  const classes = useStyles();

  
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
           <MenuIcon data-testid="MenuIcon"/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title} 
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
}
