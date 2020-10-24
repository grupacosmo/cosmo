import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import BlogNavBarSection from "./Components/Sections/BlogNavBarSection";
import {backendUrl, email} from "../components/properties";
import ContactSection from "./Components/Sections/ContactSection";
import Card from "../components/Card/Card";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

const useStyles = makeStyles(styles);

function getMemberDescription(name, img, email) {
  return (
    <>
      <Card>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <GridContainer justify="center">
              <GridItem xs={12}>
                <div style={{marginTop: "20px", width: "100%", backgroundColor: "#f6f6f6"}}>
                  <img src={img} alt="Member" style={{width: "50%"}}/>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer style={{padding: "20px"}}>
              <GridItem xs={12}>
                <h4 style={{fontWeight: "700"}}>{name}</h4>
                <p style={{fontStyle: "italic"}}>{email}</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Card>
    </>
  )
}

let description;
let receiver = email;

export default function ContactPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get("id"));
  const [descriptionReady, setDescriptionReady] = useState(false);

  useEffect(() => {
    if (id === null || isNaN(id)) {
      setDescriptionReady(true);
    }
    else {
      const url = `${backendUrl}/members/${id}`;
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            window.open("/", "_self");
          }
          return response.json();
        })
        .then((json) => {
          if (json.email) {
            receiver = json.email;
            description = getMemberDescription(json.title.rendered, json.photo.guid, json.email);
          }
          setDescriptionReady(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [id]);

  const classes = useStyles();
  return (
    <div id="menu-navbar" style={{marginTop: "140px"}}>
      <BlogNavBarSection href={`/contact${id ? `?id=${id}` : ""}`} height={-1}/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {descriptionReady ? (
            description ? <ContactSection receiver={receiver} description={description}/> : <ContactSection receiver={receiver}/>
          )
          : <h2>Loading...</h2>}
      </div>
      <Footer />
    </div>
  );
}
