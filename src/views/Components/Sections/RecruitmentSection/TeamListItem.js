import React from "react";
import "../../../../assets/css/RecruitmentSection/TeamListItem.css"

// @material-ui/icons

// core components
import {ListItem, ListItemText, Typography} from "@material-ui/core";


export default function TeamListItem(props) {
    return (
        <ListItem button alignItems="flex-start" component="a" href={props.data.href}>
            <ListItemText
                primary={<h3 className="TeamItemTitle">{props.data.teamTitle}</h3>}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            style={{display: "inline"}}
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