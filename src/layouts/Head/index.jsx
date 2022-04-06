/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// import './script.js'
import "./navbar.css";
import { NavbarLogo } from "../../utils/allImgs";
import { Addshrink } from "../../utils";
import Preloader from "../../components/Preloader";
import data from "../../data/data-layouts/data-Head.json";

function Head({ Title }) {
  useEffect(() => {
    Addshrink();
  }, []);

  return (
    <>
      <Preloader Title={Title} />
      <nav
        className="navbar navbar-expand-md navbar-white fixed-top"
        id="banner"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span>
              <img src={NavbarLogo} alt="logo" />
            </span>
          </NavLink>

         <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#" >
                  Discover
                </NavLink>
                </li>
        
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Activity
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link" to="#" >
                  Pages
                </NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Contact
                </NavLink>
              </li>
              <li className="lh-55px">
                <NavLink to="/connectwallet" className="btn login-btn ml-50">
                  Connect Wallet
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Head;
