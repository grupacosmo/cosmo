import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-scroll";
import getLocale, {getLanguage} from "../../../util/internationalization";

const useStyles = makeStyles(styles);

export default function HomeSection(props) {
  const classes = useStyles();

  const image = require("assets/img/home_background.jpg");
  const img = new Image();
  img.src = image;

  const language = getLanguage();
  const locale = getLocale("index").homeSection;

  // this piece of code, detects if the background image is loaded
  img.onload = () => props.setLoaded(true);
  img.onerror = () => props.setLoaded(true);

  return (
    <Parallax image={image}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem style={{textAlign: "right"}}>
            <Button
              type="button"
              round
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "2px solid white",
                margin: "0 30px 0 0",
              }}
              onClick={() => {
                let isPolish = !language || language === "pl";
                isPolish ? sessionStorage.setItem("lang", "en") : sessionStorage.setItem("lang", "pl");
                window.open("/", "_self");
              }}
            >{locale.switchLanguageButton}</Button>
          </GridItem>
          <GridItem>
            <div className={classes.brand}>
              <h1 className={classes.title}>{locale.title}</h1>
              <h3 className={classes.subtitle}>{locale.description}</h3>
              <Link
                activeClass="active"
                to="who-we-are"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button type="button" color="info" round>{locale.whoWeAreButton}</Button>
              </Link>
              <Link
                activeClass="active"
                to="contact-form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button type="button" color="info" round>{locale.contactButton}</Button>
              </Link>
              <Link
                activeClass="active"
                to="our-goals"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button type="button" color="info" round>{locale.ourGoalButton}</Button>
              </Link>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
}
