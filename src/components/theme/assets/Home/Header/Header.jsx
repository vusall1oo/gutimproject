import React from 'react'
import "../Header/Header.scss"
function Header() {
  return (
    <>
        <header className="header-bg">
        <div className="hero-text">
          <span>FITNESS ELEMENTS</span>
          <h1>BMI CALCULATOR</h1>
          <p>
            Gutim comes packed with the user-friendly BMI Calculator
            <br /> shortcode which lets
          </p>
          <a href="#" className="primary-btn">
            Read More
          </a>
        </div>
      </header>
      <div className="container_mouse" id="container_mouse">
    <span className="mouse-btn">
        <span className="mouse-scroll"></span>
    </span>
    <span>Scroll Down</span>
</div>
    </>
  )
}

export default Header
