import React, {useState} from "react";
import JsxParser from 'react-jsx-parser'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Loading from "../../../components/Loading/Loading";
import {backendUrl} from "../../../components/properties";

const useStyles = makeStyles(styles);

let fetchedPosts = [];

export default function BlogSection() {

  const [postsLoaded, setPostsLoaded] = useState(false);

  fetch(backendUrl + "/posts?per_page=3&page=1")
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
    <div className={classes.section} style={{padding: "0"}}>
      <h2 className={classes.title}>Aktualności</h2>
      <div>
        <GridContainer justify="center">
          {
            postsLoaded ?
              fetchedPosts.map(post => (
                <GridItem xs={12} sm={12} md={8} lg={4} key={post.id}>
                  <Card plain>
                    <GridItem
                      xs={12} sm={12} md={12}
                      className={classes.itemGrid}>
                      <div
                        style={{
                          width: "100%",
                          height: "250px",
                          backgroundImage: `url(${post.acf.thumbnail})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                        className={classes.imgRaised}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {post.title.rendered}
                    </h4>
                    <CardBody style={{height: "155px", textOverflow: "ellipsis", overflow: "hidden"}}>
                      <div className={classes.description}>
                        <JsxParser
                          jsx={post.excerpt.rendered}
                        />
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                      <Button
                        justIcon
                        color="transparent"
                        href={`/post?id=${post.id}`}
                        style={{width: "150px"}}
                      >
                        Czytaj dalej
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))
              :
              <GridItem style={{padding: "100px 0"}}>
                <Loading />
              </GridItem>
          }
          <GridItem>
            <Button
              justIcon
              color="primary"
              href={"/blog"}
              style={{fontSize: "20px", width: "200px"}}
            >
              Więcej postów
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
