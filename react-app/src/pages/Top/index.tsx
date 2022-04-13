import { useState, Fragment } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BaseContents from "components/BaseContents";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { NavList } from "route/NavList";
import Logo from "images/logo.svg";
import { COLOR_DEFINITIONS } from "utils/color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "240px",
      maxWidth: 360,
      backgroundColor: COLOR_DEFINITIONS.MAIN.WHITE,
      color: COLOR_DEFINITIONS.MAIN.SECONDARY,
      borderRadius: "10px",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    logo: {
      width: "30px",
    },
    link: {
      color: COLOR_DEFINITIONS.MAIN.SECONDARY,
    },
  })
);

const Top = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <BaseContents title="メニュー">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {NavList.map((nav, i) => (
          <Fragment key={i}>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <img src={Logo} alt="react" className={classes.logo} />
              </ListItemIcon>
              <ListItemText primary={nav.title} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {nav.navList.map((list, j) => (
              <Collapse key={j} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link href={list.path} className={classes.link}>
                      {list.name}
                    </Link>
                  </ListItem>
                </List>
              </Collapse>
            ))}
          </Fragment>
        ))}
      </List>
    </BaseContents>
  );
};

export default Top;
