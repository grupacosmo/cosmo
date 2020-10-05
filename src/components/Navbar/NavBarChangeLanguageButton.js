import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {getLanguage} from "../../util/internationalization";

const useStyles = makeStyles(styles);

export default function NavBarChangeLanguageButton(props) {
  const lang = getLanguage();
  const flag = require(`assets/img/flags/${lang}.png`);
  const {href} = props;

  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Tooltip
        id="change-language"
        title={lang === "pl" ? "Switch language" : "Zmień język"}
        placement={window.innerWidth > 959 ? "top" : "left"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={() => {
            lang === "pl" ? sessionStorage.setItem("lang", "en") : sessionStorage.setItem("lang", "pl");
            window.open(href, "_self");
          }}
        >
          <img alt="language" src={flag}  style={{width: "20px"}}/>
        </Button>
      </Tooltip>
    </ListItem>
  );
}
