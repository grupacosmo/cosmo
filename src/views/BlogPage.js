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
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import BlogNavBarSection from "./Components/Sections/BlogNavBarSection";
import Loading from "../components/Loading/Loading";
import {backendUrl} from "../components/properties";
import JsxParser from "react-jsx-parser";
import getLocale, {getLanguage} from "../util/internationalization";
import SwitchLanguageButton from "../components/SwitchLanguageButton";

const useStyles = makeStyles(styles);

let fetchedPosts = [];

export default function BlogPage() {

  const locale = getLocale("blog");
  const lang = getLanguage();
  const [postsLoaded, setPostsLoaded] = useState(false);
  const url = backendUrl + "/posts?filter[meta_key]=type&filter[meta_value]=";

  fetch(url + (lang === "pl" ? "polish-post" : "english-post"))
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      fetchedPosts = json;
      setPostsLoaded(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  const classes = useStyles();
  return (
    <div>
      <BlogNavBarSection />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem style={{textAlign: "right"}}>
              <SwitchLanguageButton href="/blog"/>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <h1 className={classes.title} style={{textAlign: "center", width: "100%"}}>{locale.title}</h1>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {
            postsLoaded ?
              fetchedPosts.map(post => (
                <GridItem xs={12} sm={12} md={12} key={post.id} style={{paddingTop: "40px"}}>
                  <Card plain>
                    <div style={{backgroundColor: "#fafafa", width: "100%"}}>
                      <GridItem
                        xs={12} sm={12} md={6}
                        className={classes.itemGrid}
                        style={{margin: "auto"}}>
                        <img src={post.acf.thumbnail}
                             alt="thumbnail"
                             style={{width: "100%", cursor: "pointer"}}
                             onClick={() => window.open(`/post?id=${post.id}`, "_self")}/>
                      </GridItem>
                    </div>
                    <p className={classes.description} style={{fontStyle: "italic", color: "#bcbcbc"}}>
                      {`${post.date.slice(8,10)}.${post.date.slice(5,7)}.${post.date.slice(0,4)}`}
                    </p>
                    <h3 className={classes.cardTitle} style={{textAlign: "center"}}>
                      <a style={{color: "#3c4858"}} href={`/post?id=${post.id}`}>{post.title.rendered}</a>
                    </h3>
                    <CardBody style={{maxHeight: "155px", textOverflow: "ellipsis", overflow: "hidden"}}>
                      <JsxParser
                        jsx={post.excerpt.rendered}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                      <Button
                        justIcon
                        color="transparent"
                        href={`/post?id=${post.id}`}
                        style={{width: "150px"}}
                      >
                        {locale.readMoreButton}
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))
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
