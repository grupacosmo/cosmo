import React from "react";
import "assets/css/LoadingScreen.css";
import logo from "assets/img/svg/logo_animated.svg";

export default function LoadingScreen(props) {

  const logoStyle = {
    position: "fixed",
    width: 100,
    height: 120,
    top: "50%",
    left: "50%",
    marginTop: -60,
    marginLeft: -50
};



  return (
    <div className={props.isLoaded ? "loadingScreen hide" : "loadingScreen"}>
      <img style={logoStyle} src={logo}  alt=""/>
    </div>
  );
}
