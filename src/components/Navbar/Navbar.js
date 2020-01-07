import React from "react";

// Importing StyledNavbar
import StyledNavbar from './StyledNavbar';

const Navbar = () => {
  return(
    <div>
      <StyledNavbar>
        <div>
          <ul className="navbar-brand">
            <li>MyWeather</li>
          </ul>
          <ul className="navbar-link">
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </StyledNavbar>
    </div>
  )
}

export default Navbar;
