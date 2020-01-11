import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import pk from "assets/img/politechnika.jpg";
import baltic from "assets/img/balticsatapps.png";
import department from "assets/img/logoIT.png";
import "assets/css/PartnerCarousel.css"
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const imgStyle = {
    height: "auto",
    width: "auto",
    padding:"auto",
    maxHeight: "150px",
    maxWidth: "90%"
};
const partnerStyle = {
    //maxWidth: "90%",
};
const carouselStyle = {
    maxHeight: "150px",
    width: "auto",
    margin: "auto"
};

const PartnersSection = () => {
    const classes = useStyles();

    return (

        <div className={classes.section} id="our-goals">
            <div className={classes.container}>
                <h2 className={classes.title}>Nasi partnerzy </h2>
                <Carousel style={carouselStyle} emulateTouch showArrows={false}  interval={5000} infiniteLoop showThumbs={false}
                          autoPlay showStatus={false} showIndicators={false}>
                    <div className="Partner" style={partnerStyle}>
                        <img style={imgStyle} src={pk} alt="politechnika krakowska"/>

                    </div>
                    <div className="Partner" style={partnerStyle}>
                        <img style={imgStyle} src={baltic} alt="balticsatapps"/>
                    </div>
                    <div className="Partner" style={partnerStyle}>
                        <img style={imgStyle} src={department} alt="department"/>
                        <p style={{fontSize:"1.5rem",lineHeight:1.1}}>Wydział Informatyki i Telekomunikacji</p>
                    </div>

                </Carousel>
            </div>
        </div>

    );


};
export default PartnersSection;