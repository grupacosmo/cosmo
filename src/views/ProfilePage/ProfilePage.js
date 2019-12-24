import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import NavBarSection from "./Sections/NavBarSection";
import Profile from "./Sections/Profile";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  return (
    <div>
      <NavBarSection />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />

      <Profile />

      <Footer />
    </div>
  );
}
