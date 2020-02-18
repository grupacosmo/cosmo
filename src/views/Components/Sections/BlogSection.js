import React, {useState} from "react";

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

const useStyles = makeStyles(styles);

export default function BlogSection() {

  const [postsLoaded, setPostsLoaded] = useState(false);

  setTimeout(() => setPostsLoaded(true), 2000);

  let fetchedPosts = [
    {
      id: 1,
      title: "Title 1",
      thumbnail: require("assets/img/faces/christian.jpg"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet."
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
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec odio dapibus, venenatis nisl in, blandit lectus. Integer ac nulla lacinia, aliquet arcu blandit, tempus ligula. Morbi viverra erat laoreet, viverra libero at, dapibus tellus. Quisque euismod laoreet quam, eu sollicitudin tellus pharetra ac. Nulla eleifend ante at commodo sagittis. Mauris hendrerit rutrum scelerisque. Etiam at efficitur lectus, malesuada ullamcorper nulla. Mauris eu viverra nisl. Donec condimentum augue eu tristique imperdiet."
    }
  ];

  const classes = useStyles();
  return (
    <div className={classes.section}>
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
                          backgroundImage: `url(${post.thumbnail})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                        className={classes.imgRaised}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {post.title}
                    </h4>
                    <CardBody style={{height: "155px", textOverflow: "ellipsis", overflow: "hidden"}}>
                      <p className={classes.description}>
                        {post.content}
                      </p>
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
