import React from "react";

import NavBarProfileLinks from "components/Navbar/NavBarProfileLinks";
import NavBar from "components/Navbar/NavBar";

export default function NavBarSection() {
  return (
    <NavBar
      brand="COSMO"
      rightLinks={<NavBarProfileLinks />}
      fixed
      color="transparent"
      changeColorOnScroll={{
        height: 500,
        color: "white"
      }}
    />
  );
}
