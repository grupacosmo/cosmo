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

const useStyles = makeStyles(styles);

export default function BlogPage() {

  const [postsLoaded, setPostsLoaded] = useState(false);
  setTimeout(() => setPostsLoaded(true), 2000);

  let fetchedPosts = [
    {
      id: 1,
      title: "Title 1",
      thumbnail: require("assets/img/faces/christian.jpg"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet."
    },
    {
      id: 2,
      title: "Title 2",
      thumbnail: require("assets/img/bg7.jpg"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat"
    },
    {
      id: 3,
      title: "Title 3",
      thumbnail: require("assets/img/bg4.jpg"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet."
    }
  ];

  const classes = useStyles();
  return (
    <div>
      <BlogNavBarSection />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <h1 className={classes.title} style={{textAlign: "center", width: "100%"}}>Blog</h1>
            <p style={{textAlign: "center", width: "100%", fontStyle: "italic"}}>Aktualności i osiągnięcia</p>
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
                        <img src={post.thumbnail} alt="thumbnail" style={{width: "100%"}}/>
                      </GridItem>
                    </div>
                    <p className={classes.description} style={{fontStyle: "italic", color: "#bcbcbc"}}>
                      12.01.2020
                    </p>
                    <h3 className={classes.cardTitle} style={{textAlign: "center"}}>
                      {post.title}
                    </h3>
                    <CardBody style={{maxHeight: "155px", textOverflow: "ellipsis", overflow: "hidden"}}>
                      <p className={classes.description}>
                        {post.content}
                      </p>
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                      <Button
                        justIcon
                        color="transparent"
                        href={`/post/${post.id}`}
                        style={{width: "150px"}}
                      >
                        Czytaj dalej
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
