import React from "react";
import { NavLink } from "react-router-dom";
import NavLinksComponent from "./NavLinksComponent";
import "./NavComponent.css";

const openNav = () => {
  document.getElementById("sidenav").style.width = "250px";
}

const closeNav = () => {
  document.getElementById("sidenav").style.width = "0";
};

const NavComponent = () => {
  
  return (
    <nav>
      <div className="bigScreen">
        <NavLinksComponent />
      </div>
      <div class="smallScreen">
        <span className="toggle" onClick={openNav} title="Open menu">
          &#9776;
        </span>
        <div id="sidenav" className="sidenav">
          <NavLink to="#" className="closeNav" onClick={closeNav}>
            &times;
          </NavLink>
          <NavLinksComponent />
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
