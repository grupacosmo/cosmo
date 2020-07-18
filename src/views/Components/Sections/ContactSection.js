import React from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Card from "components/Card/Card";
import OldForm from "components/Form/OldForm.js";
import getLocale from "../../../util/internationalization";

const useStyles = makeStyles(styles);

// Contact Section Hook
const ContactSection = props => {
  const classes = useStyles();
  const {receiver, description} = props;
  const locale = getLocale("index").contactSection;

  console.log(receiver);

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

  const descriptionComponent = description ? description : <>
    <Card>
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
            <h4>{locale.localizationTitle}</h4>
          </div>
          <p className={classes.description} style={descriptionStyle}>
            Warszawska 24
            <br />
            Wydział Informatyki i telekomunikacji
            <br />
            Katedra Informatyki
          </p>

          <div className={classes.title}>
            <h4>{locale.emailTitle}</h4>
          </div>
          <p className={classes.description} style={descriptionStyle}>
            kolocosmopk@gmail.com
            <br />
          </p>
        </GridItem>{" "}
      </GridContainer>
    </Card>
  </>;

  return (
    <div className={classes.section} id="contact-form">
      <div className={classes.container}>
        <h2 className={classes.title}>{locale.title}</h2>
        <GridContainer justify="center" style={{padding: "0 25px"}}>
          <GridItem xs={12} sm={12} md={6}>
            {descriptionComponent}
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              <h3>{locale.sendUsMessage}</h3>
            </div>
            <Card plain style={{ padding: 10 }}>
              <OldForm />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
export default ContactSection;
