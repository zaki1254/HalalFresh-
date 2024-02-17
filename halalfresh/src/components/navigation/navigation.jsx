import React from "react";
import "./navigation.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className={click ? "Navbar__column" : "Navbar-flex"}>
        <div className="navbar__logo">
          <h1>HalalFresh</h1>
        </div>
        
        <Icon
          icon="ci:hamburger-md"
          className="navbar__nav-mobile"
          onClick={handleClick}
        />

        <div className={click ? "navbar__navbar" : "navbar__navbar-mobile"}>
          <ul className={click ? "nav__items-flex" : "nav__items"}>
          <li className="nav__links">
              <NavLink to="/ourMenu" activeClassName="active">
                Our Menu
              </NavLink>
            </li>

            <li className="nav__links">
              <NavLink to="/FAQs" activeClassName="active">
                FAQs
              </NavLink>
            </li>

            <li className="nav__links">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>

            <li className="nav__links">
              <NavLink to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>

            <li className="nav__links nav__links-Order">
              <NavLink to="/startOrder" activeClassName="active">
                Start An Order
              </NavLink>
            </li>

            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
