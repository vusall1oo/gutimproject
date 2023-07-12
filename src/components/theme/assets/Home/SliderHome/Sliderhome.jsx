import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../SliderHome/Sliderhome.scss";

const Sliderhome = () => {
  return (
    <div className="div-slick">
      <h2 className="heading">UNLIMITED CLASSES</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay
        interval={3200}
        transitionTime={1500}
        showStatus={false}
        emulateTouch
        dynamicHeight
      >
      
       <div className="slider-slick-one">
          <div className="container">
            <div className="box-container">
              <div className="box">
                <div className="div-img1" alt=""></div>
                <div className="text-img">
                  <h4>Yoga</h4>
                  <p><i className="fa-solid fa-user"></i> Ryan Knight</p>
                </div>
              </div>{" "}
              <div className="box">
                <div className="div-img2" alt=""></div>
                <div className="text-img">
                  <h4>Running</h4>
                  <p><i className="fa-solid fa-user"></i> Randy Rivera</p>
                </div>
              </div>{" "}
              <div className="box">
                <div className="div-img3" alt=""></div>{" "}
                <div className="text-img">
                  <h4>Personal Training</h4>
                  <p><i className="fa-solid fa-user"></i> Cole Robertson</p>
                </div>
              </div>{" "}
              <div className="box">
                <div className="div-img4" alt=""></div>{" "}
                <div className="text-img">
                <h4>Dance</h4>
                  <p><i className="fa-solid fa-user"></i> Kevin McCormick</p>
                </div>
              </div>
              <div className="box">
                <div className="div-img5" alt=""></div>{" "}
                <div className="text-img">
                <h4>Running</h4>
                  <p><i className="fa-solid fa-user"></i> Randy Rivera</p>
                </div>
              </div>
              <div className="box">
                <div className="div-img6" alt=""></div>{" "}
                <div className="text-img">
                <h4>Personal Training</h4>
                  <p><i className="fa-solid fa-user"></i> Cole Robertson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-slick-two">
          <div className="container">
            <div className="box-container">
              <div className="box">
                <div className="div-img7" alt=""></div>{" "}
                <div className="text-img">
                <h4>Running</h4>
                  <p><i className="fa-solid fa-user"></i> Randy Rivera</p>
                </div>
              </div>
              <div className="box"><div className="div-img8" alt="">
                
              </div><div className="text-img">
                  <h4>Karate</h4>
                  <p><i className="fa-solid fa-user"></i> Kevin McCormick</p>
                </div></div>
              
              <div className="box">
                <div className="div-img1" alt=""></div>
                <div className="text-img">
                <h4>Personal Training</h4>
                  <p><i className="fa-solid fa-user"></i> Cole Robertson</p>
                </div>
              </div>
              <div className="box">
                <div className="div-img2" alt=""></div>
                <div className="text-img">
                  <h4>Weight Loss</h4>
                  <p>Ryan Scott</p>
                </div>
              </div>
              <div className="box">
                <div className="div-img3" alt=""></div>
                <div className="text-img">
                  <h4>Running</h4>
                  <p><i className="fa-solid fa-user"></i>Randy Rivera</p>
                </div>
              </div>
              <div className="box">
                <div className="div-img4" alt=""></div>
                <div className="text-img">
                  <h4>Karate</h4>
                  <p><i className="fa-solid fa-user"></i>Kevin McCormick</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Sliderhome;
