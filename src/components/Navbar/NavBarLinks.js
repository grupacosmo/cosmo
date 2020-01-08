/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Email, People, Flag } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Link } from "react-scroll";

const useStyles = makeStyles(styles);

export default function NavBarLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          to="who-we-are"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={classes.navLink}
          style={{ cursor: "pointer" }}
        >
          <People className={classes.icons} /> Kim jesteśmy?
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          to="contact-form"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={classes.navLink}
          style={{ cursor: "pointer" }}
        >
          <Email className={classes.icons} /> Kontakt
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          to="our-goals"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={classes.navLink}
          style={{ cursor: "pointer" }}
        >
          <Flag className={classes.icons} /> Nasz cel
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/pkcosmopk/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="Follow us on github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/grupacosmo/cosmo"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
