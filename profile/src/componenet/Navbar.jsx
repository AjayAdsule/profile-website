import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container flex justify-between flex-wrap">
        <div className="navbar-left">
          <NavLink to="/Home">Ajay Adsule</NavLink>
        </div>
        <div className="navbar-right space-x-12">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/About">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
