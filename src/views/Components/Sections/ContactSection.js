import React from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/contactStyle.js";
import Card from "components/Card/Card";
import OldForm from "components/Form/OldForm.js";
import {Divider} from "@material-ui/core";

//Styling

const useStyles = makeStyles(styles);

// Contact Section Hook
const ContactSection = props => {
  const classes = useStyles();

  //this style and style below is using for centering description paragraph vertically

  const descriptionGridContainerStyle = {
    height: "100%"
  };
  const h2Style = {
    fontFamily:"'Titillium Web', sans-serif",
  }

  const descriptionGridItemStyle = {
    height: "100%",
    display: "flex",
    alignItems: "baseline",
    flexDirection: "column"
  };

  const descriptionStyle = {
    textAlign: "justify",
    fontFamily: "'Titillium Web', sans-serif",
    padding: 20
  };

  return (
    <div className={classes.section} id="contact-form">
      <div className={classes.container}>
        <h2 className={classes.title}>Kontakt</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
              <GridContainer
                justify="center"
                style={descriptionGridContainerStyle}
              >
                <GridItem
                  xs={12}
                  sm={12}
                  md={9}
                  style={descriptionGridItemStyle}
                >
                  <div className={classes.title}>
                    <h2 style={h2Style}>Lokalizacja</h2>
                  </div>

                  <h4 className={classes.description} style={descriptionStyle}>
                    Warszawska 24
                    <br/>
                    Wydział Informatyki i telekomunikacji
                    <br />
                    Katedra Informatyki
                  </h4>

                  <div className={classes.title}>
                    <h2 style={h2Style}>Adres Email</h2>
                  </div>
                  <h4 className={classes.description} style={descriptionStyle}>
                    kolocosmopk@gmail.com
                  </h4>
                </GridItem>{" "}
              </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.title}>
              <h3>Wyślij nam wiadomość</h3>
            </div>
              <OldForm />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
export default ContactSection;
