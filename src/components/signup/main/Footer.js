import React, { Fragment } from 'react';
import './footer.css';

const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid" style={{marginTop:"50px"}}>
        <div className="row">
          <div className="col-5">
          <img src="./images/img1.jpeg" alt="charitable impact" width="50%" height="50%" />
            <p>Charitable Impact
              #1250 - 1500 W Georgia St
              Vancouver, BC V6G 2Z6 Canada</p>
          </div>
          <div className="col-3">
            <h5>About</h5>
            <ul className="list-group">
              <li><a href="#">who we are</a></li>
              <li><a href="#">charitable impact foundation</a></li>
              <li><a href="#">Fees</a></li>
              <li><a href="#">careers</a></li>
              <li><a href="#">press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Support</h5>
            <ul className="list-group">
              <li><a href="#">Help centre</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Aggrement</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Solution</h5>
            <ul className="list-group">
              <li><a href="#">For charity</a></li>
              <li><a href="#">For Advisors</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <hr />
          <div className="footer">
            <p>© Copyright 2020 CHIMP Technology Inc. - All Rights Reserved.</p>
            
          </div>
          
        </div>
      </div>
    </Fragment>
  )
}

export default Footer;

