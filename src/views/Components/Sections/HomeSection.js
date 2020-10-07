import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-scroll";
import getLocale from "../../../util/internationalization";
import Carousel from "react-slick";

import img1 from "assets/img/examples/earth.jpg"

const useStyles = makeStyles(styles);

export default function HomeSection(props) {
  const classes = useStyles();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const carouselItems = [
    {image: img1, title: "Rekrutacja", additional: <p>Rekrutacja kończy się 20.02.2020</p>},
    {image: img1, title: "Budujemy satelitę"},
    {image: img1, title: "Sondy stratosferyczne"},
    {image: img1, title: "Komputer pokładowy OBC - satelita"},
    {image: img1, title: "Eksperyment AI - satelita"},
    {image: img1, title: "Komunikacja - satelita, sondy"},
    {image: img1, title: "Webdev - budowa stron internetowych"}
  ]

  const image = require("assets/img/home_background.jpg");
  const img = new Image();
  img.src = image;

  const locale = getLocale("index").homeSection;

  // this piece of code, detects if the background image is loaded
  img.onload = () => props.setLoaded(true);
  img.onerror = () => props.setLoaded(true);

  return (
    <Parallax image={image}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={6}>
            <div className={classes.brand}>
              <h1 className={classes.title}>{locale.title}</h1>
              <h3 className={classes.subtitle}>{locale.description}</h3>
              <Link
                activeClass="active"
                to="who-we-are"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button type="button" color="info" round>{locale.whoWeAreButton}</Button>
              </Link>
              <Link
                activeClass="active"
                to="contact-form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button type="button" color="info" round>{locale.contactButton}</Button>
              </Link>
              {/*<Link
                activeClass="active"
                to="our-goals"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button type="button" color="info" round>{locale.ourGoalButton}</Button>
              </Link>*/}
            </div>
          </GridItem>
          <GridItem md={6}>
            <Carousel {...carouselSettings} style={{maxWidth: "400px"}}>
              {
                carouselItems.map(item =>
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>{item.title}</h4>
                      <div>{item.additional ? item.additional : <></>}</div>
                    </div>
                  </div>
                )
              }
            </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
}
