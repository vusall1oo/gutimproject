import React from 'react'
import "./Register.scss";
import Regis from "../../../../img/register-pic.jpg";
function Register() {
  return (
    <>
     <section className="register-section spad">
<div className="container">
<div className="row">
<div className="col-lg-8">
<div className="register-text">
<div className="section-title">
<h2>Register Now</h2>
<p>The First 7 Day Trial Is Completely Free With The Teacher</p>
</div>
<form action="#" className="register-form">
<div className="row">
<div className="col-lg-6">
<label for="name">First Name</label>
<input type="text" id="name"/>
</div>
<div className="col-lg-6">
<label for="email">Your email address</label>
<input type="text" id="email"/>
</div>
<div className="col-lg-6">
<label for="last-name">Last Name</label>
<input type="text" id="last-name"/>
</div>
<div className="col-lg-6">
<label for="mobile">Mobile No*</label>
<input type="text" id="mobile"/>
</div>
</div>
<button type="submit" className="register-btn">Get Started</button>
</form>
</div>
</div>
<div className="col-lg-4">
<div className="register-pic">
<img src={Regis} alt=""/>
</div>
</div>
</div>
</div>
</section> 
    </>
  )
}

export default Register;
