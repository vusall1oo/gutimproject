import "./Footer.scss";
import ScrollToTop from "react-scroll-to-top";
import React from "react";
import arrowPhoto from "../../img/arrow.png";
function Footer() {
  return (
    <>
    <ScrollToTop smooth top="20" component={<p style={{ color: "blue" ,display:"flex", alignItems:"center", justifyContent:"center", paddingTop:"6px"}}><img style={{objectFit:"cover", width:"20px", height:"20px"}} src={arrowPhoto} alt=""/></p>}/>
    <section className="footer-banner">
<div className="container-fluid">
<div className="row">
<div className="col-lg-6">
<div className="footer-banner-item ban-1 set-bg">
<span>New member</span>
<h2>7 days for free</h2>
<p>Complete the training sessions with us, surely you will be happy</p>
<a href="#" className="primary-btn">Get Started</a>
</div>
</div>
<div className="col-lg-6">
<div className="footer-banner-item ban-2 set-bg">
<span>contact us</span>
<h2>09 746 204</h2>
<p>If you trust us on your journey they dark sex does not disappoint you!</p>
<a href="#" className="primary-btn">Get Started</a>
</div>
</div>
</div>
</div>
</section>
    <footer className="footer-section">
<div className="container">
<div className="row">
<div className="col-md-4">
<div className="contact-option">
<span>Phone</span>
<p>(123) 118 9999 - (123) 118 9999</p>
</div>
</div>
<div className="col-md-4">
<div className="contact-option">
<span>Address</span>
<p>72 Kangnam, 45 Opal Point Suite 391</p>
</div>
</div>
<div className="col-md-4">
<div className="contact-option">
<span>Email</span>
<p>contactcompany@Gutim.com</p>
</div>
</div>
</div>
<div className="subscribe-option set-bg">
<div className="so-text">
<h4>Subscribe To Our Mailing List</h4>
<p>Sign up to receive the latest information </p>
</div>
<form action="#" className="subscribe-form">
<input type="text" placeholder="Enter Your Mail"/>
<button type="submit"><i className="fa fa-send"></i></button>
</form>
</div>
<div className="copyright-text">
<ul>
<li><a href="#">Term&amp;Use</a></li>
<li><a href="#">Privacy Policy</a></li>
</ul>
<p>©</p><p>
Copyright © 2023 All rights reserved |  This template is made with  <i className="fa fa-heart" aria-hidden="true"></i> by <a className="social-href" href="https://instagram.com/vusall911/" target="_blank">Vusal Suleymanov</a>
</p><p></p>
<div className="footer-social">
<a href="#"><i className="fa fa-facebook"></i></a>
<a href="#"><i className="fa fa-twitter"></i></a>
<a href="#"><i className="fa fa-instagram"></i></a>
<a href="#"><i className="fa fa-dribbble"></i></a>
</div>
</div>
</div>
</footer>
    </>
  );
}
export default Footer;
