import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AboutPic from "../../../../../img/about-pic.jpg";
import playImg from "../../../../../img/play.png";
import "./SignatureAbout.scss"
import signature from "../../../../../img/about-signature.png"
function SignatureAbout() {

 
  return (
    <>
        <section className="signature-about-us">
        <div className="signature-about-pic">
          <img
            className="signature-about-img"
            src={AboutPic}
            alt="No Internet Connection"
          />
          <a className="autoplay-link" href="https://youtu.be/SlPhMPnQ58k">
            {" "}
            <img className="autoplay" src={playImg} alt="" />
          </a>
        </div>
        <div className="signature-about-content">
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
          <div className="signature-div">
            <img src={signature} alt="" />
            <h4>Lettie Chavez</h4>
            <span>CEO - Founder</span>

          </div>
        </div>
      </section>

    </>
  )
        }

export default SignatureAbout;
