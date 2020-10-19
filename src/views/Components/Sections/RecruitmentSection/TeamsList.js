import React from "react";
import TeamListItem from "./TeamListItem";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {List, Divider} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


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
        href: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 2,
        teamTitle: "Team OBC",
        href: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 3,
        teamTitle: "Team AI",
        href: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 4,
        teamTitle: "Team Marketingu",
        href: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 5,
        teamTitle: "Team Komunikacji",
        href: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    },
    {
        id: 6,
        teamTitle: "Team Logistyki",
        href: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien" +
            " ullamcorper, consectetur magna ac, auctor orci." + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien"
    }
]

export default function TeamsList() {
    const classes = useStyles();

    const Items = data.map((item) => {
        if(item.id < data.length - 1){
            return(
                <GridItem xs={12} md={6}>
                    <TeamListItem data={item}/>
                    <Divider/>
                </GridItem>
            )
        }else {
            if(item.id === data.length -1){
                return (
                    <GridItem xs={12} md={6}>
                        <TeamListItem data={item}/>
                        <Divider id="OneBeforeLastDivider"/>
                    </GridItem>
                )
            }else {
                console.log("hello")
                return (
                    <GridItem xs={12} md={6}>
                        <TeamListItem data={item}/>
                    </GridItem>
                )
            }
        }

    })

    return (
        <List className={classes.root}>
            <GridContainer justify="center">
                {Items}
            </GridContainer>
        </List>
    )

}