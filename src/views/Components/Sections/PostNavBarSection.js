import React from "react";

import NavBar from "components/Navbar/NavBar";
import NavBarPostLinks from "../../../components/Navbar/NavBarPostLinks";

export default function PostNavBarSection() {
    return (
        <NavBar
            brand="COSMO"
            rightLinks={<NavBarPostLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 10,
                color: "white"
            }}
        />
    );
}
