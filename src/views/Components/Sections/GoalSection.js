import React from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import rocket from "assets/img/rocket.png";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//stylistyka komponentów
import styles from "assets/jss/material-kit-react/views/componentsSections/goalStyle";
import Card from "components/Card/Card";

const useStyles = makeStyles(styles);


const GoalSection = props => {
  const classes = useStyles();



  const descriptionGridItemStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  };


  const rocketDivStyle={

    margin:"auto"
  };



  return (
      <div className={classes.section} id="our-goals">
        <div className={classes.container}>
          <h2 className={classes.title} >Cel projektu ?</h2>
          <GridContainer justify="center" style={descriptionGridItemStyle}>
            <>
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes.card} plain>
                  <h4 className={classes.description}>
                    <ul>
                      <li> Zaprojektowanie i przetestowanie małego silnika jonowego
                       </li>
                      <li> Stworzenie inteligentnego systemu przetwarzania obrazu na pokładzie satelity opartego na AI</li>
                      <li>
                        Edukacja, wdrożenie uczestników projektu w branżę kosmiczną</li>
                    </ul>

                  </h4>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>

                <div className="rocket" style={rocketDivStyle}>
                  <img className={classes.rocket} src={rocket} alt=""/>

                </div>
              </GridItem>
            </>
          </GridContainer>


        </div>
      </div>
  );
};
export default GoalSection;
