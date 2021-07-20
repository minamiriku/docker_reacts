import { useState, FC, Fragment } from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Header from "components/Header";
import { NavList } from "route/NavList";
import Logo from "images/logo.svg";
import { COLOR_DEFINITIONS } from "utils/color";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
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
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
      backgroundColor: COLOR_DEFINITIONS.MAIN.SECONDARY,
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    iconButton: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
    },
    divider: {
      backgroundColor: COLOR_DEFINITIONS.MAIN.PRIMARY,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    link: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
      width: "100%",
    },
    logo: {
      width: "30px",
    },
    main: {
      paddingTop: "64px",
    },
  })
);

type LayoutType = {
  children: any;
};

const Layout: FC<LayoutType> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon className={classes.iconButton} />
            ) : (
              <ChevronRightIcon className={classes.iconButton} />
            )}
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        {NavList.map((nav, i) => (
          <Fragment key={i}>
            <Typography key={i} variant="h6" noWrap>
              {nav.title}
            </Typography>
            <List>
              {nav.navList.map((list, j) => (
                <ListItem button key={j}>
                  <img src={Logo} alt="react" className={classes.logo} />
                  <Link
                    href={list.path}
                    underline="none"
                    className={classes.link}
                  >
                    {list.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider className={classes.divider} />
          </Fragment>
        ))}
      </Drawer>
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
