import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import pk from "assets/img/politechnika.jpg";
import baltic from "assets/img/balticsatapps.png";
import department from "assets/img/logoIT.png";
import department2 from "assets/img/partners/katedra.png";
import "assets/css/PartnerCarousel.css"
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

const imgStyle = {
    height: "auto",
    width: "auto",

    padding: "auto",
    maxHeight: "150px",
    maxWidth: "90%"
};
const imgStyle2 = {
    height: "auto",
    width: "auto",
    background: "black",
    padding: "10px",
    maxHeight: "130px",
    maxWidth: "90%"
};

const gridStyle = {
    justifyContent: "center",

};
const itDepartmentStyle = {
    color: "rgb(122,164,64)",

};
const carouselStyle = {
    maxHeight: "150px",
    width: "auto",
    margin: "auto"
};



const PartnersSection = () => {
    const classes = useStyles();


    return (

        <div className={classes.section} id="our-partners">

            <h2 className={classes.title}>Nasi partnerzy</h2>


            <Carousel style={carouselStyle}
                      showArrows={false}
                      interval={3000}
                      infiniteLoop
                      showThumbs={false}
                      autoPlay
                      showIndicators={false}>

                <a href="https:\\www.pk.edu.pl" target="_blank" rel="noopener noreferrer">
                    <div className="Partner">
                        <img style={imgStyle} src={pk} alt="politechnika krakowska"/>
                    </div>
                </a>
                <a href="https://balticsatapps.pl/" target="_blank" rel="noopener noreferrer">
                    <div className="Partner">
                        <img style={imgStyle} src={baltic} alt="balticsatapps"/>
                    </div>
                </a>
                <a href="https://ii.pk.edu.pl" target="_blank" rel="noopener noreferrer">
                    <div className="Partner">
                        <img style={imgStyle2} src={department2} alt="itdepartment"/>
                    </div>
                </a>
                <a href="https://it.pk.edu.pl" target="_blank" rel="noopener noreferrer">
                    <div className="Partner">
                        <Grid container  style={gridStyle}>
                            <Grid xs={4} md={6}>
                                <img style={imgStyle} src={department} alt="department"/>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <h2 style={itDepartmentStyle}>Wydział Informatyki i Telekomunikacji</h2>
                            </Grid>
                        </Grid>


                    </div>
                </a>

            </Carousel>
        </div>


    );
};
export default PartnersSection;