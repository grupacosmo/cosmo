import React from "react";

// core components
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import NavBarSection from "./Sections/NavBarSection";
import Profile from "./Sections/Profile";

const ParallaxStyle = {
  backgroundPosition: "bottom"
};

export default function ProfilePage(props) {
  return (
    <>
      <NavBarSection />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg")}
        style={ParallaxStyle}
     />


      <Profile />
      <Footer />
    </>
  );
}
