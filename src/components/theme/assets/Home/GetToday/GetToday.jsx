import React from 'react'
import "../GetToday/GetToday.scss"
import heroImg from "../../../../../img/banner-person.png"
function GetToday() {
  return (
    <div className='training'>
    
    <div className='bg-image-today'>
    <div className="all-items">
    <div className="hero-text-today">
          <h2>GET TRAINING TODAY</h2>
          <p>
          Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.
          </p>
          <a href="#" className="primary-btn">
            Contact now
          </a>
        </div>

        <div className='bg-hero-img'>
<img src={heroImg} alt="" />
        </div>
    </div>
    </div>
    </div>
  )
}

export default GetToday
