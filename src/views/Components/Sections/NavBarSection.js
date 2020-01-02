import React from "react";

import NavBarLinks from "components/Navbar/NavBarLinks";
import NavBar from "components/Navbar/NavBar";

export default function NavBarSection() {
    return (
        <NavBar
            brand="COSMO"
            rightLinks={<NavBarLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 500,
                color: "white"
            }}
        />
    );
}
