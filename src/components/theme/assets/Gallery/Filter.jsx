import React, { useState } from "react";
import "./Filter.scss";
import img1 from "../../../../img/gallery/gallery-1.jpg";
import img2 from "../../../../img/gallery/gallery-2.jpg";
import img3 from "../../../../img/gallery/gallery-3.jpg";
import img4 from "../../../../img/gallery/gallery-4.jpg";
import img5 from "../../../../img/gallery/gallery-5.jpg";
import img6 from "../../../../img/gallery/gallery-6.jpg";
import img7 from "../../../../img/gallery/gallery-7.jpg";
import { Col, Row } from "react-bootstrap";

function Filter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [scaleAnimation, setScaleAnimation] = useState(false);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setScaleAnimation(true);

    setTimeout(() => {
      setScaleAnimation(false);
    }, 500);
  };

  const getGalleryItemClassName = (filter) => {
    const filterArr = filter.split(" ");
    const isActiveFilter = activeFilter === "all" || filterArr.includes(activeFilter);
    return `col-lg-6 mix ${filterArr.join(" ")} ${isActiveFilter ? "active" : "hidden"}`;
  };

  return (
    <div className="gallery-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="gallery-controls">
              <li
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => handleFilterClick("all")}
              >
                all gallery
              </li>
              <li
                className={activeFilter === "fitness" ? "active" : ""}
                onClick={() => handleFilterClick("fitness")}
              >
                fitness
              </li>
              <li
                className={activeFilter === "coaching" ? "active" : ""}
                onClick={() => handleFilterClick("coaching")}
              >
                coaching
              </li>
              <li
                className={activeFilter === "event" ? "active" : ""}
                onClick={() => handleFilterClick("event")}
              >
                event
              </li>
              <li
                className={activeFilter === "other" ? "active" : ""}
                onClick={() => handleFilterClick("other")}
              >
                other
              </li>
            </ul>
          </div>
        </div>
        <div className="row gallery-filter" id="MixItUp6164BB">
          <div className={getGalleryItemClassName("fitness")}>
            <img className={scaleAnimation ? "scale-animation" : ""} src={img1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className={getGalleryItemClassName("fitness coaching")}>
                <img className={scaleAnimation ? "scale-animation" : ""} src={img2} alt="" />
              </div>
              <div className="row-lg-12">
                <div className="row">
                  <div className={getGalleryItemClassName("coaching")}>
                    <img className={scaleAnimation ? "scale-animation" : ""} src={img3} alt="" />
                  </div>
                  <div className={getGalleryItemClassName("coaching")}>
                    <img className={scaleAnimation ? "scale-animation" : ""} src={img4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className={getGalleryItemClassName("other")}>
                <img className={scaleAnimation ? "scale-animation" : ""} src={img5} alt="" />
              </div>
              <div className={getGalleryItemClassName("other")}>
                <img className={scaleAnimation ? "scale-animation" : ""} src={img6} alt="" />
              </div>
            </div>
          </div>
          <div className={getGalleryItemClassName("event")}>
            <img className={scaleAnimation ? "scale-animation" : ""} src={img7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
