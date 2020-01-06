import React from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
import {makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Card from "components/Card/Card";
import OldForm from "components/Form/OldForm.js";

//Styling

const useStyles = makeStyles(styles);


// Contact Section Hook
const ConstactSection = props => {
  const classes = useStyles();



  //this style and style below is using for centering description paragraph vertically
  const descriptionGridContainerStyle = {
    height: "100%"
  };

  const descriptionGridItemStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  };

  const descriptionStyle = {
    textAlign: "justify",
    fontFamily: "Roboto Slab",
    padding: 20
  };

  return (
    <div className={classes.section} id="contact-form">
      <div className={classes.container}>
        <h2 className={classes.title}>Kontakt</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <GridContainer
                justify="center"
                style={descriptionGridContainerStyle}>
                <GridItem
                  xs={12}
                  sm={12}
                  md={9}
                  style={descriptionGridItemStyle}>
                  <div className={classes.title}>
                    <h4>Lokalizacja</h4>
                  </div>
                  <p className={classes.description} style={descriptionStyle}>
                    Warszawska 24
                    <br />
                    Wydział Informatyki i telekomunikacji
                    <br />
                    Katedra Informatyki
                  </p>

                  <div className={classes.title}>
                    <h4>Adres Email</h4>
                  </div>
                  <p className={classes.description} style={descriptionStyle}>
                    kolocosmopk@gmail.com
                    <br />
                  </p>
                </GridItem>{" "}
              </GridContainer>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.title}>
              <h3>Wyślij nam wiadomość</h3>
            </div>
            <Card plain style={{ padding: 10 }}>
                {/*<OldForm/>*/}
                <OldForm/>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
export default ConstactSection;
