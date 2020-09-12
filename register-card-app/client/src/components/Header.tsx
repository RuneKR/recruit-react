import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export interface HeaderProps {
  title: string;
  isMenuShowing?: boolean;
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
      textAlign: 'center'
    },
  })
);

export default function Header({
  title = "Menu",
  isMenuShowing = false,
  ...htmlProps
}: HeaderProps & React.HTMLAttributes<HTMLElement>) {
  const classes = useStyles();

  const icon = isMenuShowing ? (
    <ArrowBackIcon data-testid="ArrowBackIcon" />
  ) : (
    <MenuIcon data-testid="MenuIcon" />
  );

  return (
    <div className={classes.root} {...htmlProps}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {icon}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
