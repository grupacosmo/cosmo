import React from "react";

import NavBar from "components/Navbar/NavBar";
import NavBarPostLinks from "../../../components/Navbar/NavBarPostLinks";

export default function PostNavBarSection(props) {
    return (
        <NavBar
            brand="COSMO"
            rightLinks={<NavBarPostLinks id={props.id}/>}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 10,
                color: "white"
            }}
        />
    );
}
