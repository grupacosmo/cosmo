
import React, {useState} from "react";
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

    padding: "auto",
    maxHeight: "150px",
    maxWidth: "90%"
};

const partnersListStyle = {
    display: "flex",
    justifyContent: "center",

};
const partnersUlStyle = {
    textAlign: "left",
    listStyle: "circle"
};
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


const moreDivStyle = {
    height: "200px",
};

const PartnersSection = () => {
    const classes = useStyles();
    const [carouselVisibility, setCarouselVisibility] = useState(true);

    const partners =
        [{
            id: 1,
            name: "Politechnika Krakowska",
            link: "https://pk.edu.pl"
        },
            {
                id: 2,
                name: "BalticSatApps",
                link: "https://balticsatapps.pl/",

            }
            ,
            {
                id: 3,
                name: "Wydział Informatyki i Telekomunikacji",
                link: "https://it.pk.edu.pl/"

            }];


    const listPartners = partners.map((p) =>
        <li key={p.id.toString()}>
            <a href={p.link} target="_blank">
                {p.name}
            </a>

        </li>
    );
    return (

        <div className={classes.section} id="our-partners">

            <h2 className={classes.title}>Nasi partnerzy </h2>
            {carouselVisibility ? <div className={classes.container}>

                    <Carousel style={carouselStyle} showArrows={false} interval={3000} infiniteLoop
                              showThumbs={false}
                              autoPlay showStatus={false} showIndicators={false}>
                        <div className="Partner">
                            <img style={imgStyle} src={pk} alt="politechnika krakowska"/>


                        </div>
                        <div className="Partner">
                            <img style={imgStyle} src={baltic} alt="balticsatapps"/>
                        </div>
                        <div className="Partner">
                            <img style={imgStyle} src={department} alt="department"/>
                            <p style={{fontSize: "1.5rem", lineHeight: 1.1}}>Wydział Informatyki i Telekomunikacji</p>
                        </div>

                    </Carousel>
                </div> :
                <div className="partnerDetails" style={moreDivStyle}>

                    <div style={partnersListStyle} className="partnersList">
                        <ul style={partnersUlStyle}>{listPartners}</ul>
                    </div>
                </div>
            }
            <RegularButton onClick={() => setCarouselVisibility(!carouselVisibility)}>
                Szczegóły
            </RegularButton>



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