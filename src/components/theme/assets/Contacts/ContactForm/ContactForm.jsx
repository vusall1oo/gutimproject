import React from 'react'
import "./ContactForm.scss"
import logo1 from "../../../../../img/icon/icon-1.png"
import logo2 from "../../../../../img/icon/icon-2.png"
import logo3 from "../../../../../img/icon/icon-3.png"
function ContactForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="contact-info ">
            <h4 className='text-contact'>Contact Us</h4>
            <div className="contact-address">
              <div className="ca-widget">
                <div className="cw-icon">
                  <img className="img-1" src={logo1} alt="" />
                </div>
                <div className="cw-text">
                  <h5>Our Location</h5>
                  <p>60-49 Road 11378 New York</p>
                </div>
              </div>
              <div className="ca-widget">
                <div className="cw-icon">
                  <img className="img-2" src={logo2} alt="" />
                </div>
                <div className="cw-text">
                  <h5>Phone:</h5>
                  <p>+65 11.188.888</p>
                </div>
              </div>
              <div className="ca-widget">
                <div className="cw-icon">
                  <img className="img-3" src={logo3} alt="" />
                </div>
                <div className="cw-text">
                  <h5>Mail</h5>
                  <p>hellocolorlib@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="leave-comment">
            <h3>Leave A Comment</h3>
            <form action="#">
              <div className="row">
                <div className="col-lg-4">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-lg-4">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-lg-8">
                  <textarea placeholder="Messages" />
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm
