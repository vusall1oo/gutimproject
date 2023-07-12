import React from 'react'
import "../Trainers/Trainers.scss";
import img1 from "../../../../../img/trainer/trainer-1.jpg";
import img2 from "../../../../../img/trainer/trainer-2.jpg";
import img3 from "../../../../../img/trainer/trainer-3.jpg";
function Trainers() {
  return (
   <>
   <div className="trainers-div">
    <h2>EXPERT TRAINERS</h2>
    <div className="grid-container-tr cards">
    <div className="grid-item-1 card">
      <img src={img1} alt="" />
      <div className="trainer-text">
          <h5>Patrick Cortez</h5>
          <span>Leader</span>
          <p>
            non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <div className="trainer-social">
            <a href="#!">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#!">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#!">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#!">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>  
    <div className="grid-item-2"><img src={img2} alt="" />
    <div className="trainer-text-2 card">
          <h5>Gregory Powers</h5>
          <span>Gym coach</span>
          <p>
            non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <div className="trainer-social">
            <a href="#!">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>
    </div>
    <div className="grid-item-3"><img src={img3} alt="" />
    <div className="trainer-text card">
          <h5>Walter Wagner</h5>
          <span>Dance trainer</span>
          <p>
            non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <div className="trainer-social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div></div>  
    </div>
    </div>
   </>
  )
}

export default Trainers;