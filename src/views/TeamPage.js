import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import BlogNavBarSection from "./Components/Sections/BlogNavBarSection";
import {backendUrl} from "../components/properties";
import {getLanguage} from "../util/internationalization";
import SwitchLanguageButton from "../components/SwitchLanguageButton";
import "assets/css/PostPage.css";
import AnnouncementSection from "./Components/Sections/AnnouncementSection";

const useStyles = makeStyles(styles);

let members = {};

// todo load content
// todo responsive app
// todo locale

export default function TeamPage() {

  // checking language
  const lang = getLanguage();

  // fetching data
  const [membersLoaded, setMembersLoaded] = useState(false);
  const url = backendUrl + "/members";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // maps response and sorts by priority (Greatest first)
      members = json.map(member => {
        return {
          id: member.id,
          name: member.title.rendered,
          priority: parseInt(member.orderpriority),
          descriptionpl: member.description,
          descriptionen: member.englishdescription
        }
      }).sort(((a, b) => b.priority - a.priority))

      setMembersLoaded(true);
    })
    .catch((error) => {
      console.log(error);
    });

  // render
  const classes = useStyles();
  return (
    <div>
      <AnnouncementSection fixed={true}/>
      <BlogNavBarSection />
      <Parallax filter image={require("assets/img/group-photo.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem style={{textAlign: "right"}}>
              <SwitchLanguageButton href="/teams"/>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <h1 className={classes.title} style={{textAlign: "center", width: "100%"}}>
              Nasz zespół
            </h1>
            <p style={{textAlign: "center", fontStyle: "italic", width: "100%", fontSize: "15px"}}>Członkowie koła COSMO</p>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          {
            membersLoaded && <h1>Loaded</h1>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
