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
import Loading from "../components/Loading/Loading";
import {backendUrl} from "../components/properties";
import JsxParser from "react-jsx-parser";
import {getLanguage} from "../util/internationalization";
import SwitchLanguageButton from "../components/SwitchLanguageButton";
import "assets/css/PostPage.css";

const useStyles = makeStyles(styles);

let pageContent = {};

export default function SubPage() {
  // url params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  if (id === null) {
    window.open("/", "_self");
  }

  // checking language
  const lang = getLanguage();
  const idEnd = id.slice(id.length - 3, id.length);
  if ((idEnd === "_en" && lang === "pl") || (idEnd === "_pl" && lang === "en")) {
    window.open("/page?id=" + id.slice(0, id.length - 2) + lang, "_self");
  }

  // fetching data
  const [pageLoaded, setPageLoaded] = useState(false);
  const url = backendUrl + "/subpages?per_page=1&page=1&filter[meta_key]=page_id&filter[meta_value]=" + id;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.length === 0) {
        window.open("/", "_self");
      }
      pageContent = json[0];
      document.title = pageContent.title.rendered;

      setPageLoaded(true);

      document.querySelectorAll(".content img").forEach((element) => {
        element.removeAttribute("height");
        element.removeAttribute("width");
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // render
  const classes = useStyles();
  return (
    <div>
      <BlogNavBarSection />
      <Parallax filter image={pageLoaded ? pageContent["background_image"].guid : null}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem style={{textAlign: "right"}}>
              <SwitchLanguageButton href={"/page?id=" + id}/>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <h1 className={classes.title} style={{textAlign: "center", width: "100%"}}>
              {pageLoaded && pageContent.title.rendered}
            </h1>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div >
          {
            pageLoaded ?
              <GridItem xs={12} sm={12} md={8} style={{margin: "auto"}}>
                <div className="content">
                  <JsxParser
                    jsx={pageContent.content.rendered}
                  />
                </div>
              </GridItem>
            :
            <GridItem style={{padding: "150px 0"}}>
              <Loading />
            </GridItem>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
