import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import profile from "assets/img/faces/christian.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const useStyles = makeStyles(styles);
const SampleArrowStyle = {
  fontSize: 0,
  lineHeight: 0,
  position: "absolute",
  top: "50%",
  display: "block",
  height: "100%",
  padding: 0,
  transform: "translateY(-50%)",
  cursor: "pointer",
  border: "none",
  color: "transparent",
  outline: "none",
  background: "grey",
  width: "15%",
  zIndex: 2,
  opacity: 0.5,
  marginTop: 100
};

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Button
      id="sampleArrow"
      className={className}
      style={SampleArrowStyle}
      onClick={onClick}
    />
  );
}
function Profile1(props) {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      style={{ margin: 100 }}
    >
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={profile} alt="..." className={imageClasses} />
              </div>
              <div className={classes.name}>
                <h3 className={classes.title}>Christian Louboutin</h3>
                <h6>DESIGNER</h6>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-github"} />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-instagram"} />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-facebook"} />
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>
          <p>
            An artist of considerable range, Chet Faker — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure.{" "}
          </p>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Studio",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={studio1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio2}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={studio5}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio4}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Work",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work5}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Favorite",
                  tabIcon: Favorite,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work4}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio3}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <img
                          alt="..."
                          src={work2}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={work1}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={studio1}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default function Profile(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SampleArrow />,
    nextArrow: <SampleArrow />
  };
  return (
    <Slider {...settings}>
      <Profile1 />
      <Profile1 />
      <Profile1 />
    </Slider>
  );
}
