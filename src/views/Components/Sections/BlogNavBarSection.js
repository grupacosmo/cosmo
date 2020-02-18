import React from "react";

import NavBar from "components/Navbar/NavBar";
import NavBarBlogLinks from "../../../components/Navbar/NavBarBlogLinks";

export default function NavBarBlogSection() {
    return (
        <NavBar
            brand="COSMO"
            rightLinks={<NavBarBlogLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 500,
                color: "white"
            }}
        />
    );
}
