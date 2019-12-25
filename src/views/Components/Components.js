import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import Footer from "components/Footer/Footer.js";
import Divider from "@material-ui/core/Divider";
import styles from "assets/jss/material-kit-react/views/components.js";
import OurTeamSection from "../Components/Sections/OurTeamSection.js";
import HomeSection from "./Sections/HomeSection";
import ContactSection from "./Sections/ContactSection";
import NavBarSection from "./Sections/NavBarSection";
import GoalSection from "./Sections/GoalSection";
import LoadingScreen from "./Sections/LoadingScreen";

const useStyles = makeStyles(styles);

export default function Components() {

  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();
  return (
    <div id="menu-navbar">
      <LoadingScreen isLoaded={loaded}/>
      <NavBarSection />
      <HomeSection setLoaded={setLoaded} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <OurTeamSection />
        <Divider variant="middle" />
        <GoalSection />
        <Divider variant="middle" />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
