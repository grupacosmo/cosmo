/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

const buttonStyle = {
  width: 120,
  justifyContent: "center"
};
export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <div className={classes.left}>
            <Button style={buttonStyle} color="twitter" href="https://twitter.com/pkcosmopk" target="_blank">
              <i className={classes.socials + " fab fa-twitter"} /> Tweet
            </Button>
            <Button
              style={buttonStyle}
              color="facebook"
              target="_blank"
              href="https://www.facebook.com/pkcosmopk/"
            >
              <i className={classes.socials + " fab fa-facebook-square"} />{" "}
              Share
            </Button>
            <Button style={buttonStyle} color="instagram" href="#">
              <i className={classes.socials + " fab fa-instagram"} />
              Follow
            </Button>
            <Button
              style={buttonStyle}
              color="github"
              target="blank"
              href="https://github.com/grupacosmo/cosmo"
            >
              <i className={classes.socials + " fab fa-github"} /> Star
            </Button>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a href="#" className={aClasses} target="_blank">
               
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
