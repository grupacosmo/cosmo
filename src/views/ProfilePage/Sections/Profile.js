import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import profile from "assets/img/faces/christian.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "assets/img/faces/pawel_kisielewicz_profile.jpg";
import JakubChwastekImg from "assets/img/faces/jakub_chwastek_profile.png";
//TODO:
//Links
//Descriptions
//Pictures
//Add more people

const useStyles = makeStyles(styles);
const SampleArrowStyle = {
  fontSize: 0,
  visibility: "hidden",
  lineHeight: 0,
  position: "absolute",
  top: "50%",
  display: "block",
  height: 600,
  padding: 0,
  transform: "translateY(-50%)",
  cursor: "pointer",
  border: "none",
  color: "transparent",
  outline: "none",
  background: "grey",
  width: "10%",
  zIndex: 2,
  opacity: 0.5,
  marginTop: "auto",
  marginRight: 25,
  marginLeft: 25
};

function SampleArrow(props) {
  // const { className, style, onClick } = props;
  const { className, onClick } = props;
  return (
    <Button
      id="sampleArrow"
      className={className}
      style={SampleArrowStyle}
      onClick={onClick}
    />
  );
}

function DefaultProfile(props) {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      style={{ margin: 110 }}
    >
      <div className={classes.container} style={{ height: 600 }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={props.Img} alt="..." className={imageClasses} />
              </div>
              <div className={classes.name}>
                <h3 className={classes.title}>{props.Name}</h3>
                <h6>{props.Title}</h6>
                <Button
                  justIcon
                  link
                  className={classes.margin5}
                  href={props.Github}
                  target="_blank"
                >
                  <i className={"fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  link
                  className={classes.margin5}
                  href={props.Linkedin}
                  target="_blank"
                >
                  <i className={"fab fa-linkedin"} />
                </Button>
                <Button justIcon link color="youtube" className={classes.margin5} href={props.Youtube} target="_blank">
                  <i className={"fab fa-youtube"} />
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>
          <p>{props.Description} </p>
        </div>
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
    nextArrow: <SampleArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <DefaultProfile
        Img={img1}
        Name="Mgr inż. Paweł Kisielewicz"
        Title="Prowadzący koła naukowego COSMO"
        Description="Under development"
        Github=""
        Linkedin=""
        Youtube=""
      />
      <DefaultProfile
        Img={profile}
        Name="Patryk Borchowiec"
        Title="Java/React Geek "
        Description="Student drugiego roku infromatyki na wydziale Infromatyki i Telekomunikacji Politechniki Krakowskiej. Pasjonat technologi Java/ Spring oraz frameworku React. "
        Github="https://github.com/borchowiec"
        Linkedin=""
        Youtube=""
      />
      <DefaultProfile
        Img={JakubChwastekImg}
        Name="Jakub Chwastek"
        Title="C#/React Geek"
        Description="Student drugiego roku infromatyki na wydziale Infromatyki i Telekomunikacji Politechniki Krakowskiej. Pasjonat technologi C#/ ASP.NET Core oraz frameworku React. "
        Github="https://github.com/JacobChwastek"
        Linkedin="https://www.linkedin.com/in/jakub-chwastek-892b9816b/"
        Youtube=""
      />
    </Slider>
  );
}
