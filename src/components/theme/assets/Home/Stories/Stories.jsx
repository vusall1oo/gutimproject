import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import storiesImg1 from "../../../../../img/testimonial/quote-left.png"
import storiesImg2 from "../../../../../img/testimonial/testimonial-1.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Stories/Stories.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Stories() {
  return (
    <>
    <h2>Success Stories</h2>
    <div className="stories-div">
        
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <>
            <div className="testimonial-item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="ti-pic">
                <img src={storiesImg2} alt="" />
                <div className="quote">
                  <img src={storiesImg1} alt="" />
                </div>
              </div>
              <div className="ti-author">
                <h4>Patrick Cortez</h4>
                <span>Leader</span>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <>
            <div className="testimonial-item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="ti-pic">
                <img src={storiesImg2} alt="" />
                <div className="quote">
                  <img src={storiesImg1} alt="" />
                </div>
              </div>
              <div className="ti-author">
                <h4>Patrick Cortez</h4>
                <span>Leader</span>
              </div>
            </div>
          </>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
    
  );
}
