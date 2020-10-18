import React from "react";
import "../../../../assets/css/RecruitmentSection/RecruitmentSection.css"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {List, Divider} from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import TeamListItem from "./TeamListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const data = [
    {
        id: 1,
        teamTitle: "Team Webdev",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci."
    },
    {
        id: 2,
        teamTitle: "Team OBC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci."
    },
    {
        id: 3,
        teamTitle: "Team AI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci."
    },
    {
        id: 4,
        teamTitle: "Team Marketingu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci."
    }
]

export default function TeamsList(props) {
    const classes = useStyles();

    const Items = data.map((item) => {
        return item.id !== data.length ?
            <>
                <TeamListItem data={item}/>
                <Divider variant="inset" component="li"/>
            </>
            :
            <>
                <TeamListItem data={item}/>
            </>
    })

    return (
        <List className={classes.root}>
            {Items}
        </List>
    )

}