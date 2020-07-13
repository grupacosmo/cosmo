import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import BlogNavBarSection from "./Components/Sections/BlogNavBarSection";
import {backendUrl} from "../components/properties";
import getLocale, {getLanguage} from "../util/internationalization";
import AnnouncementSection from "./Components/Sections/AnnouncementSection";

const useStyles = makeStyles(styles);

let members = {};

export default function TeamPage() {

  const locale = getLocale("team");
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
          image: member.photo.guid,
          priority: parseInt(member.orderpriority),
          description: {
            pl: member.description,
            en: member.englishdescription
          },
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
      <BlogNavBarSection href="/team"/>
      <Parallax filter image={require("assets/img/group-photo.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <h1 className={classes.title} style={{textAlign: "center", width: "100%"}}>
              {locale.title}
            </h1>
            <p style={{textAlign: "center", fontStyle: "italic", width: "100%", fontSize: "15px"}}>{locale.description}</p>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer justify="center">
          {
            membersLoaded && members.map(member =>
              <GridItem xs={12} md={6} lg={4} xl={3} key={member.id}>
                <Card style={{maxWidth: "20rem", marginLeft: "auto", marginRight: "auto", minHeight: "600px"}}>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      backgroundImage: `url(${member.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center"
                    }}
                    className={classes.imgCardTop}
                  />

                  <CardBody>
                    <h4 className={classes.cardTitle}>{member.name}</h4>
                    <p>{member.description[lang]}</p>
                  </CardBody>
                </Card>
              </GridItem>
            )
          }
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
