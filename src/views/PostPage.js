import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import "assets/css/PostPage.css";
import Loading from "../components/Loading/Loading";
import PostNavBarSection from "./Components/Sections/PostNavBarSection";
import {backendUrl} from "../components/properties";
import JsxParser from "react-jsx-parser";
import {getLanguage} from "../util/internationalization";
import AnnouncementSection from "./Components/Sections/AnnouncementSection";

const useStyles = makeStyles(styles);

let fetchedPost = {};
let authorName = "";

export default function PostPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = parseInt(urlParams.get("id"));

  if (id === null || isNaN(id)) {
    window.open("/", "_self");
  }

  const lang = getLanguage();
  const [postLoaded, setPostLoaded] = useState(false);
  const [authorLoaded, setAuthorLoaded] = useState(false);

  fetch(backendUrl + "/posts/" + id)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      fetchedPost = json;

      // if this is other language post, open proper post
      if (json.acf["other-language"] && ((lang === "en" && json.acf.type === "polish-post")
        || (lang === "pl" && json.acf.type === "english-post"))) {
        window.open("/post?id=" + json.acf["other-language"], "_self");
      }

      const authorsLink = json._links.author[0].href;
      fetch(authorsLink)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          authorName = data.name;
          setAuthorLoaded(true);
        })
        .catch((error) => {
          setAuthorLoaded(false);
          console.error('Error:', error);
        });

      setPostLoaded(true);

      document.querySelectorAll(".content img").forEach((element) => {
        element.removeAttribute("height");
        element.removeAttribute("width");
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      window.open("/", "_self");
    });

  const classes = useStyles();
  return (
    <div>
      <AnnouncementSection fixed={true}/>
      <PostNavBarSection id={id}/>
      <div className={classNames(classes.main, classes.mainRaised)} style={{marginTop: "100px"}}>
        <div style={{padding: "20px"}}>
          {
            postLoaded ?
              <GridItem xs={12} sm={12} md={12} style={{paddingTop: "40px"}}>
                <div style={{backgroundColor: "#fafafa", width: "100%"}}>
                  <GridItem
                    xs={12} sm={12} md={6}
                    className={classes.itemGrid}
                    style={{margin: "auto"}}>
                    <img src={fetchedPost.acf.thumbnail} alt="thumbnail" style={{width: "100%"}}/>
                  </GridItem>
                </div>
                <h1 className={"titleHeader"} style={{textAlign: "center"}}>
                  {fetchedPost.title.rendered}
                </h1>

                <GridItem xs={12} sm={12} md={8} style={{margin: "auto"}}>
                  <div className="content">
                    <JsxParser
                      jsx={fetchedPost.content.rendered}
                    />
                  </div>
                </GridItem>
                {
                  authorLoaded ?
                    <>
                      <p className={classes.description}
                         style={{fontStyle: "italic", color: "#767676", textAlign: "right"}}>
                        Autor: {authorName}
                        <br/>
                        <span className={classes.description} style={{fontStyle: "italic", color: "#767676", paddingLeft: "60px", textAlign: "right"}}>
                          {`${fetchedPost.date.slice(8,10)}.${fetchedPost.date.slice(5,7)}.${fetchedPost.date.slice(0,4)}`}
                        </span>
                      </p>
                    </>
                  : <></>
                }
              </GridItem>
            :
            <GridItem style={{padding: "150px 0", textAlign: "center"}}>
              <Loading />
            </GridItem>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
