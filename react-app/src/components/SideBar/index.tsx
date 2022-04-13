import { FC, Fragment, useState } from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import { NavList } from "route/NavList";
import Logo from "images/logo.svg";
import { COLOR_DEFINITIONS } from "utils/color";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    nested: {
      paddingLeft: theme.spacing(4),
    },
    link: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
    },
    logo: {
      width: "30px",
    },
    heading: {
      padding: "0 20px",
    },
    star: {
      color: COLOR_DEFINITIONS.MAIN.PRIMARY,
    },
  })
);

type SideBarType = {
  open: boolean;
  handleDrawerClose: () => void;
};

const SideBar: FC<SideBarType> = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [isExpand, setIsExpand] = useState(true);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  return (
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
      <List component="nav" aria-labelledby="nested-list-subheader">
        {NavList.map((nav, i) => (
          <Fragment key={i}>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <img src={Logo} alt="react" className={classes.logo} />
              </ListItemIcon>
              <ListItemText primary={nav.title} />
              {isExpand ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {nav.navList.map((list, j) => (
              <Collapse key={j} in={isExpand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Link href={list.path} className={classes.link}>
                      <ListItemIcon>
                        <StarBorder className={classes.star} />
                      </ListItemIcon>
                      <Box component="span">{list.name}</Box>
                    </Link>
                  </ListItem>
                </List>
              </Collapse>
            ))}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
