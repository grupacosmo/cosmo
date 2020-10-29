/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Email, People, Public, AssignmentInd, LiveHelp} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Link } from "react-scroll";
import {facebookUrl, githubUrl, instagramUrl, twitterUrl} from "../properties";
import getLocale from "../../util/internationalization";
import NavBarChangeLanguageButton from "./NavBarChangeLanguageButton";
import "assets/css/IndexPageNavbar.css";

const useStyles = makeStyles(styles);

export default function NavBarLinks() {
  const locale = getLocale("index").navbar;

  const classes = useStyles();
  return (
    <List className={classes.list + " indexPageNavbar"}>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          to="RecruitmentContainer"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className={classes.navLink}
          style={{ cursor: "pointer" }}
        >
          <AssignmentInd className={classes.icons} /> {locale.recruitment}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          to="whatWeDoSection"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className={classes.navLink}
          style={{ cursor: "pointer" }}
        >
          <LiveHelp className={classes.icons} /> {locale.whatWeDo}
        </Link>
      </ListItem>
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
          <People className={classes.icons} /> {locale.whoWeAre}
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
          <Email className={classes.icons} /> {locale.contact}
        </Link>
      </ListItem>
      {/*<ListItem className={classes.listItem}>
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
          <Flag className={classes.icons} /> {locale.ourGoal}
        </Link>
      </ListItem>*/}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title={locale.news}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/blog"
            target="_self"
            className={classes.navLink}
          >
            <Public className={classes.icons} /> {locale.news}
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href={twitterUrl}
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
            href={facebookUrl}
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
            href={instagramUrl}
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
            href={githubUrl}
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <NavBarChangeLanguageButton href="/"/>
    </List>
  );
}
