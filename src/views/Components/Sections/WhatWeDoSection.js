import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Slider from "react-slick";

import img1 from "assets/img/examples/ai.jpg"
import img2 from "assets/img/examples/wyjazd.jpg"
import img3 from "assets/img/examples/webdev.jpg"
import img4 from "assets/img/examples/experiment.jpg"
import img5 from "assets/img/examples/eps.jpg"
import img6 from "assets/img/examples/balloon2.jpg"
import img7 from "assets/img/examples/laser.jpg"

const useStyles = makeStyles(styles);

export default function WhatWeDoSection() {
  const classes = useStyles();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet fermentum turpis, ut varius libero. Cras varius nisi nec felis consequat imperdiet. Donec vel diam vel lectus congue feugiat.";

  const carouselItems = [
    {image: img1, title: "Komputer pokładowy", description: lorem, teamName: "OBC", teamLink: "#", articleLink: "#"},
    {image: img2, title: "Wyjazdy", description: lorem},
    {image: img3, title: "Programowanie", description: lorem, teamName: "WebDev", teamLink: "#"},
    {image: img4, title: "Jakiś eksperyment", description: lorem, articleLink: "#"},
    {image: img5, title: "Zasilanie", description: lorem, articleLink: "#"},
    {image: img6, title: "Balon Stratosferyczny", description: lorem, articleLink: "#"},
    {image: img7, title: "Lasery", description: "Piu piu piu i myk z laserka"}
  ]

  return (
    <GridContainer>
      <GridItem md={12} align="center">
        <Slider {...carouselSettings}>
          {
            carouselItems.map((item, index) =>
              <div key={index}>
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    height: "500px"
                  }}>
                  <div style={{
                    position: "absolute",
                    width: "100%",
                    bottom: "60px",
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white"
                  }}>
                    <h2 style={{fontWeight: "bold", marginBottom: "0"}}>
                      {item.title}
                    </h2>
                    {
                      item.teamName ?
                        <a
                          href={item.teamLink}
                          target="_blank"
                          style={{color: "white", fontStyle: "italic", fontWeight: 400}}
                        >
                          Team {item.teamName}
                        </a>
                        : <></>
                    }
                    <p style={{marginTop: "40px"}}>{item.description}</p>
                    {
                      item.articleLink ?
                        <a
                          href={item.articleLink}
                          style={{fontWeight: "bold", color: "rgb(0, 172, 193)"}}
                          target="_blank"
                        >
                          Czytaj więcej
                        </a>
                        : <></>
                    }
                  </div>
                </div>
              </div>
            )
          }
        </Slider>
      </GridItem>
    </GridContainer>
  );
}
