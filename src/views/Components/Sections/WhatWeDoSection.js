import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Slider from "react-slick";

import img1 from "assets/img/examples/ai.jpg"
import img2 from "assets/img/examples/wyjazd.jpg"
import img3 from "assets/img/examples/webdev.jpg"
import img4 from "assets/img/examples/experiment.jpg"
import img5 from "assets/img/examples/eps.jpg"
import img6 from "assets/img/examples/balloon2.jpg"
import img7 from "assets/img/examples/laser.jpg"
import {useMediaQuery} from "@material-ui/core";

export default function WhatWeDoSection() {

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

  let mediumText = useMediaQuery('(max-width: 500px)');
  let smallText = useMediaQuery('(max-width: 400px)');

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
                    <h2
                      style={{
                      fontWeight: "bold", marginBottom: "0",
                      fontSize: smallText ? "20px" : (mediumText ? "25px" : "2.25rem")
                    }}>
                      {item.title}
                    </h2>
                    {
                      item.teamName ?
                        <a
                          href={item.teamLink}
                          target="_blank"
                          style={{
                            color: "white",
                            fontStyle: "italic",
                            fontWeight: 400
                          }}
                          rel="noopener noreferrer"
                        >
                          Team {item.teamName}
                        </a>
                        : <></>
                    }
                    <p style={{
                      marginTop: "40px",
                      fontSize: smallText ? "12px" : (mediumText ? "14px" : "1rem")
                    }}>{item.description}</p>
                    {
                      item.articleLink ?
                        <a
                          href={item.articleLink}
                          style={{fontWeight: "bold", color: "rgb(0, 172, 193)"}}
                          target="_blank"
                          rel="noopener noreferrer"
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
