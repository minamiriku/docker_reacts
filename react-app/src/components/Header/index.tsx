import React from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Logo from "images/logo.svg";
import { COLOR_DEFINITIONS } from "utils/color";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
      backgroundColor: COLOR_DEFINITIONS.MAIN.SECONDARY,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: "64px",
    },
    appBarShift: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
      backgroundColor: COLOR_DEFINITIONS.MAIN.SECONDARY,
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    link: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
      width: "100%",
    },
    headerLogo: {
      width: "50px",
      verticalAlign: "bottom",
    },
  })
);

type HeaderType = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const Header: React.FC<HeaderType> = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <Link href="/top" underline="none" className={classes.link}>
            React
            <img src={Logo} alt="react" className={classes.headerLogo} />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
