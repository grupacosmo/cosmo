import React from "react";
import "../../../../assets/css/RecruitmentSection/RecruitmentSection.css"
import TeamsList from "./TeamsList";

// @material-ui/core components

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

export default function RecruitmentSection() {
    return (
        <div id="RecruitmentContainer">
            <h2>Dołącz do naszego zespołu !</h2>
            <GridContainer alignItems="center" direction="row-reverse">
                <GridItem xs={12} lg={5}>
                    <GridContainer justify="center">
                        <GridItem xs={11} md={9}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi.
                                Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Sed facilisis,
                                odio ac dignissim finibus, arcu magna facilisis nunc, vitae sodales nibh quam eget
                                nisi. Integer vel diam eu massa placerat fringilla. Vestibulum metus mi, viverra a
                                mattis blandit, luctus et massa. Praesent vestibulum efficitur egestas. Curabitur
                                posuere nibh augue, quis porttitor mi lobortis non.</p>
                            <Button color="primary">Idź do formularza</Button>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12} lg={7}>
                    <GridContainer justify="center">
                        <GridItem xs={11}>
                            <TeamsList/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>

        </div>
    )
}