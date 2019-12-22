import React from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Card from "components/Card/Card";

const useStyles = makeStyles(styles);
const GoalSection = props => {
  const classes = useStyles();

  const cardStyle = {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "justify"
  };

  return (
    <div className={classes.section} id="our-goals">
      <div className={classes.container}>
        <h2 className={classes.title}>Cel projektu ?</h2>
        <GridContainer justify="center">
          <Card plain style={cardStyle}>
            <GridItem xs={12} sm={12} md={4}>
              <h4 className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                finibus nulla, at tincidunt orci. Pellentesque porttitor
                imperdiet arcu, ut posuere mauris mattis dapibus. Curabitur
                vitae elit eu elit scelerisque malesuada sed vitae dui.
                Curabitur nec arcu non sem aliquet semper ac id orci.
                Pellentesque ultrices venenatis pulvinar. Vestibulum commodo
                massa in nibh mollis, sed scelerisque elit sagittis. Integer
                pulvinar tortor vel convallis faucibus.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <h4 className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                finibus nulla, at tincidunt orci. Pellentesque porttitor
                imperdiet arcu, ut posuere mauris mattis dapibus. Curabitur
                vitae elit eu elit scelerisque malesuada sed vitae dui.
                Curabitur nec arcu non sem aliquet semper ac id orci.
                Pellentesque ultrices venenatis pulvinar. Vestibulum commodo
                massa in nibh mollis, sed scelerisque elit sagittis. Integer
                pulvinar tortor vel convallis faucibus.
              </h4>
            </GridItem>
          </Card>
        </GridContainer>
      </div>
    </div>
  );
};
export default GoalSection;
