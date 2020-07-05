import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import photo from "assets/img/faces/zdjecieGrupowe.jpg"
import getLocale from "../../../util/internationalization";

const useStyles = makeStyles(styles);

export default function OurTeamSection(props) {
  const classes = useStyles();

  const locale = getLocale("index").whoWeAreSection;

  //this style and style below is using for centering description paragraph vertically
  const descriptionGridContainerStyle = {
    height: "100%"
  };

  const teamImgStyle = {
    width:"100%",
    height:"auto",
    padding : "10px"
  };

  const descriptionGridItemStyle2 = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  };
  const descriptionStyle = {
    textAlign: "justify",
    fontFamily: "Roboto Slab",
    padding: 20,
    fontSize: 17
  };

  return (
    <div className={classes.section} id="who-we-are">
      <div className={classes.container}>
        <h2 className={classes.title}>{locale.title}</h2>
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
                style={descriptionGridItemStyle2}
              >
                <p className={classes.description} style={descriptionStyle}>{locale.description}</p>
                <Button color="primary" href="/team" target="_blank" round>{locale.moreButton}</Button>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
                <img
                  src={photo}
                  alt="COSMO"
                  style={teamImgStyle}
                />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
