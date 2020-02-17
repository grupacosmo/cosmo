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

const useStyles = makeStyles(styles);

export default function PostPage() {

  const [postLoaded, setPostLoaded] = useState(false);
  setTimeout(() => setPostLoaded(true), 2000);

  let fetchedPost = {
      id: 1,
      title: "Title 1",
    thumbnail: require("assets/img/bg7.jpg"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet."
  };

  const classes = useStyles();
  return (
    <div>
      <PostNavBarSection />
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
                    <img src={fetchedPost.thumbnail} alt="thumbnail" style={{width: "100%"}}/>
                  </GridItem>
                </div>
                <img
                  src={require("assets/img/faces/christian.jpg")}
                  alt="face"
                  style={{width: "100px", borderRadius: "30px", marginTop: "20px"}}/>
                <p className={classes.description} style={{fontStyle: "italic", color: "#767676"}}>
                  Autor: Jan Kowalski<br />
                  12.01.2020
                </p>
                <h2 className={classes.cardTitle} style={{textAlign: "center"}}>
                  {fetchedPost.title}
                </h2>

                <div className="content">
                  {/*CONTENT*/}
                  <p>
                    {fetchedPost.content}
                  </p>
                  <img src={require("assets/img/bg4.jpg")} alt="example" />
                  <p>
                    {fetchedPost.content}
                    <a href={"/"}>Some link</a>
                  </p>
                  <h3>
                    Some header
                  </h3>
                  <p>
                    {fetchedPost.content}
                  </p>
                  {/*END OF CONTENT*/}
                </div>

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
