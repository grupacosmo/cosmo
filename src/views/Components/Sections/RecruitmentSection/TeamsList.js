import React from "react";
import "../../../../assets/css/RecruitmentSection/RecruitmentSection.css"
import TeamListItem from "./TeamListItem";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {List, Divider} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPage.js";


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
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 2,
        teamTitle: "Team OBC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 3,
        teamTitle: "Team AI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 4,
        teamTitle: "Team Marketingu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 5,
        teamTitle: "Team Komunikacji",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 6,
        teamTitle: "Team Logistyki",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    }
]

export default function TeamsList() {
    const classes = useStyles();

    const Items = data.map((item) => {
        return item.id < data.length -1 ?
            <GridItem xs={6}>
                <TeamListItem data={item}/>
                <Divider/>
            </GridItem>
            :
            <GridItem xs={6}>
                <TeamListItem data={item}/>
            </GridItem>
    })

    return (
        <List className={classes.root}>
            <GridContainer justify="center">
                {Items}
            </GridContainer>
        </List>
    )

}