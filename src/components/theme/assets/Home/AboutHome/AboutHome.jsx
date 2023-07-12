import AboutPic from "../../../../../img/about-pic.jpg";
import playImg from "../../../../../img/play.png";
import React from 'react'
import "../AboutHome/AboutHome.scss"
function AboutHome() {
  return (
    <>
     <section className="about-us">
        <div className="about-pic">
          <img
            className="about-img"
            src={AboutPic}
            alt="No Internet Connection"
          />
          <a className="autoplay-link" href="https://youtu.be/SlPhMPnQ58k">
            {" "}
            <img className="autoplay" src={playImg} alt="" />
          </a>
        </div>
        <div className="about-content">
          <h2>STORY ABOUT US</h2>
          <p>
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
            sed odio sit amet nibh vulputate cursus a amet.
          </p>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
            gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, gravida quam semper libero sit
            amet.
          </p>
          <button className="read-more-btn" type="submit" name="submit">
            Read more
          </button>
        </div>
      </section>
    </>
  )
}

export default AboutHome
