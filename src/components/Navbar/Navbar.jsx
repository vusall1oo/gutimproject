import React from "react";
import Logo from "./logo.png";
import "./Navbar.scss";
function Navbar() {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#4c4c4c";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
return (
    <>
      <div className="navbar navbar-fixed-top container-fluid" id="navbar">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle navbar-default button-hamb"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <div className="hamburger">
              <span className="menu-span">MENU</span>
              <div className="hamb-bar">
                <span className="icon-bar">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </div>
            </div>
          </button>
          <a href="#!" className="navbar-brand">
            <img className="logo-img" src={Logo} alt="" />
          </a>
        </div>
        <div className="collapse navbar-right navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
          <button type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/register';
      }} className="sign-up">Sign Up Today</button>
        </div>
      </div>
    </>
  );
  }
  


export default Navbar;
