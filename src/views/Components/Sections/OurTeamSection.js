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

const useStyles = makeStyles(styles);

export default function OurTeamSection(props) {
  const classes = useStyles();


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
    padding: 20,
    fontSize: "26px",
    // fontVariant: "petite-caps
  };

  return (
    <div className={classes.section} id="who-we-are">
      <div className={classes.container}>
        <h2 className={classes.title}>Kim jesteśmy?</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} lg={7}>
            <GridContainer
              justify="center"
              style={descriptionGridContainerStyle}
            >
              <GridItem
                xs={12}
                sm={12}
                md={9}
                lg={6}
                style={descriptionGridItemStyle2}
              >
                <h4 className={classes.description} style={descriptionStyle}>
                  Grupą młodych ludzi, studentów Politechniki Krakowskiej.
                  W przerwach od nauki spotykamy się by realizować wspólny cel - wysłać własnego satelitę na orbitę.
                  Nasze zmagania można obserwować na naszych kanałach w mediach społecznościowych. Trzymajcie kciuki!
                </h4>
                <Button color="primary" href="/nasz-team" target="_blank" round>
                  Więcej
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} lg={4}>
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
