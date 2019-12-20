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

const useStyles = makeStyles(styles);

export default function HomeSection() {
  const classes = useStyles();
  return (
    <Parallax image={require("assets/img/home_background.jpg")}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1 className={classes.title}>Projekt COSMO</h1>
              <h3 className={classes.subtitle}>
                Studenckie koło naukowe Politechniki Krakowskiej
              </h3>
              <Link
                activeClass="active"
                to="who-we-are"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button type="button" color="info" round>
                  Kim jesteśmy?
                </Button>
              </Link>
              <Link
                activeClass="active"
                to="contact-form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button type="button" color="info" round>
                  Kontakt
                </Button>
              </Link>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
}
