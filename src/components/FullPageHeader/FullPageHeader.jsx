import React from "react";
import "./FullPageHeader.scss";
function AboutHeader(props) {
  return (
    <>
      <div className="about-header">
        <h1 className="header-text">{props.HeaderName}</h1>
        <span>
          <i className="fa-solid fa fa-house"></i>
           <a href="/"> Home <i class="fa-solid fa-chevron-right"></i> </a>{props.pageNames}
        </span>
      </div>
    </>
  );
}

export default AboutHeader;
