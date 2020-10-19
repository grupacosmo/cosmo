import React from "react";
import "../../../../assets/css/RecruitmentSection/TeamListItem.css"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import {ListItem,ListItemText,Typography} from "@material-ui/core";


import styles from "assets/jss/material-kit-react/views/landingPage.js";


export default function TeamListItem (props) {
    return(
        <ListItem button alignItems="flex-start" component="a" href="/#RecruitmentContainer" >
            <ListItemText
                primary={<h3 className="TeamItemTitle">{props.data.teamTitle}</h3>}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            style={{display:"inline"}}
                            color="textPrimary"
                        >
                            Ali Connors {props.data.description}
                        </Typography>
                        <a className="TeamListLink">Przejdź do opisu zespołu</a>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}