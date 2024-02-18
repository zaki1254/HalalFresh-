import React, { useState } from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import halalLogo from '../../assets/halalLogo.png'

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className={click ? "Navbar__column" : "Navbar-flex"}>
      <div className="navbar__logo">
        <img src={halalLogo} className="halalLogo"/>
      </div>
      
      <div className={click ? "navbar__navbar" : "navbar__navbar-mobile"}>
        <ul className={click ? "nav__items-flex" : "nav__items"}>
          <li className="nav__links">
            <NavLink to="/menu" activeClassName="active"> {/* Updated to="/menu" */}
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

          <li className="nav__links_r">
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
        </ul>
        
        <div className="nav__links-Order">
          <NavLink to="/startOrder" activeClassName="active"> {/* Assuming Start Order page has its own route */}
            Start An Order
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
