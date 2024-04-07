import React, { useState } from "react";
import "./ComponentsCSS/index.css";
import logo from "../images/myLogo.png";
import LandingPage from "./LandingPage";

interface dropDown {
  dropDownToggle: boolean;
  setDropDownToggle: boolean;
}
const HOMEPAGE = () => {
  const { dropDownToggle, setDropDownToggle }: dropDown = useState(false);
  return (
    <>
      <div className="HOMEPAGE">
        <header className="HeaderSection">
          <div className=" NavLogo container header d-flex align-items-center  justify-content-between">
            <h1 className="MYNAME">VICTOR</h1>
            <nav className="NavigationLinks">
              <a href="">HOME</a>
              <a href="">Projects</a>
              <a href="">Contact</a>
              <a href="">About Us</a>
              <a href="">Customers</a>
              <a className="NavBtn Apply">Apply Now </a>
              <a className="NavBtn Login">Login</a>
            </nav>
            <span
              className="material-symbols-outlined Menu"
              onClick={() => {
                setDropDownToggle(!true);
              }}
            >
              menu
            </span>
          </div>
        </header>
        <div
          className={` SmallScreenDropdown container-fluid ${
            dropDownToggle ? "d-block" : "d-none"
          }`}
        >
          <div className="mt-2 container-fluid closeDiv">
            <h1>VICTOR</h1>
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setDropDownToggle(!true);
              }}
            >
              close
            </span>
          </div>
          <nav className="DropdownSmallScreen ">
            <a href="">MENU</a>
            <a href="">HOME</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <a href="">About Us</a>
            <a href="">Customers</a>
            <a className="NavBtn Apply">Apply Now</a>
            <a className="NavBtn Login">Login</a>
          </nav>
        </div>
        <LandingPage />
      </div>
    </>
  );
};

export default HOMEPAGE;
