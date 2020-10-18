import React from "react";
import "../../../../assets/css/RecruitmentSection/RecruitmentSection.css"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {ListItem,ListItemAvatar,ListItemText,Avatar,Typography} from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

export default function TeamListItem (props) {
    const classes = useStyles();

    return(
        <ListItem button alignItems="flex-start" component="a" href="/#RecruitmentContainer" >
            <ListItemAvatar>
                <Avatar alt="Remy Sharp"  />
            </ListItemAvatar>
            <ListItemText
                primary={props.data.teamTitle}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Ali Connors {props.data.description}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}