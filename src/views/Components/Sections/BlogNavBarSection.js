import React from "react";

import NavBar from "components/Navbar/NavBar";
import NavBarBlogLinks from "../../../components/Navbar/NavBarBlogLinks";

export default function NavBarBlogSection(props) {
    return (
        <NavBar
            brand="COSMO"
            rightLinks={<NavBarBlogLinks href={props.href}/>}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
        />
    );
}
