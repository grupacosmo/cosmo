import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Card from "components/Card/Card";
import profilePhoto from "assets/img/faces/pawel_kisielewicz_profile.jpg";

const useStyles = makeStyles(styles);

export default function OurTeamSection(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  //this style and style below is using for centering description paragraph vertically
  const descriptionGridContainerStyle = {
    height: "100%"
  };

  // const descriptionGridItemStyle = {
  //   height: "100%",
  //   display: "flex",
  //   alignItems: "center"
  // };
  const descriptionGridItemStyle2 = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  };
  const mgrPictureStyle = {
    maxWidth:"200px",
    height:'auto',
  };

  const descriptionStyle = {
    textAlign: "justify",
    fontFamily: "Roboto Slab",
    padding: 20,
    fontSize: 17,
    // fontVariant: "petite-caps
  };

  return (
    <div className={classes.section} id="who-we-are">
      <div className={classes.container}>
        <h2 className={classes.title}>Kim jesteśmy?</h2>
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
                <p className={classes.description} style={descriptionStyle}>
                  Grupa młodych ludzi, studentów Politechniki Krakowskiej.
                  W przerwach od nauki spotykamy się by realizować wspólny cel - wysłać własnego satelitę na orbitę.
                  Nasze zmagania można obserwować na naszych kanałach w mediach społecznościowych. Trzymajcie kciuki!
                </p>
                <Button color="primary" href="/nasz-team" target="_blank" round>
                  Więcej
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                    style ={mgrPictureStyle}
                  src={profilePhoto}
                  alt="Paweł Kisielewicz"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                mgr inż. Paweł Kisielewicz
                <br />
                <small className={classes.smallTitle}>
                  Prowadzący koła naukowego COSMO
                </small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
