import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pk from "assets/img/partners/politechnika.jpg";
import baltic from "assets/img/partners/balticsatapps.png";
import it from "assets/img/partners/it.PNG";
import department2 from "assets/img/partners/katedra.png";
import futureLab from "assets/img/partners/futurelab.png"
import "assets/css/PartnerCarousel.css"
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import getLocale from "../../../util/internationalization";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(styles);

const imgStyle = {
    height: "auto",
    width: "auto",

    padding: "auto",
    maxHeight: "150px",
    maxWidth: "90%",

    display: "inline-block"
};
const imgStyle2 = {
    height: "auto",
    width: "auto",
    background: "black",
    padding: "10px",
    maxHeight: "130px",
    maxWidth: "90%"
};

const PartnersSection = () => {
    const classes = useStyles();
    const locale = getLocale("index").partnersSection;

    return (
      <div className={classes.section} id="our-partners">
          <h2 className={classes.title}>{locale.title}</h2>
          <GridContainer justify="center">
              <GridItem xs={12}>
                  <a href="https://botland.com.pl" target="_blank" rel="noopener noreferrer">
                      <img src="https://botland.com.pl/img/logo_botland_kn.png"
                           alt="Sklep dla robotyków i elektroników, Arduino, Raspberry Pi - BOTLAND"
                           style={{width: "100%", maxWidth: "900px", padding: "10px"}}
                      />
                  </a>
              </GridItem>
          </GridContainer>
          <GridContainer justify="center" style={{marginTop: "50px"}}>
              <GridItem sm={12} style={{width: "100%", maxWidth: "700px"}}>
                  <a href="https:\\www.pk.edu.pl" target="_blank" rel="noopener noreferrer">
                      <img style={imgStyle} src={pk} alt="politechnika krakowska"/>
                  </a>
              </GridItem>
          </GridContainer>
          <GridContainer justify="center" style={{marginTop: "30px"}}>
              <GridItem sm={12} style={{width: "100%", maxWidth: "700px"}}>
                  <a href="https://ii.pk.edu.pl" target="_blank" rel="noopener noreferrer">
                      <img style={imgStyle2} src={department2} alt="itdepartment"/>
                  </a>
              </GridItem>
          </GridContainer>
          <GridContainer justify="center" style={{marginTop: "30px"}}>
              <GridItem xs={12} sm={6} md={4}>
                  <a href="https://it.pk.edu.pl" target="_blank" rel="noopener noreferrer">
                      <img style={imgStyle} src={it} alt="it"/>
                  </a>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                  <a href="https://balticsatapps.pl/" target="_blank" rel="noopener noreferrer">
                      <img style={imgStyle} src={baltic} alt="balticsatapps"/>
                  </a>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                  <a href="http://futurelab.pk.edu.pl/" target="_blank" rel="noopener noreferrer">
                      <img style={imgStyle} src={futureLab} alt="futurelab"/>
                  </a>
              </GridItem>

          </GridContainer>
      </div>
    );
};
export default PartnersSection;