import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import OurTeamSection from "../Components/Sections/OurTeamSection.js";
import HomeSection from "./Sections/HomeSection";
import ContactSection from "./Sections/ContactSection";
import NavBarSection from "./Sections/NavBarSection";

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  return (
    <div id="menu-navbar">
      <NavBarSection />
      <HomeSection />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <OurTeamSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
