import React from 'react';
import './Footer.css'
import { FaCartPlus } from "react-icons/fa";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className = "footer p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-start">
                     <h1 className = "mb-3"><FaCartPlus/>ActShady</h1>
                     <p className = "mb-3">60, 29th Street #343, San <br /> Francisco, CA 94110, United States <br /> of America</p>
                     <h3><BsFacebook/> <AiFillTwitterCircle/> <BsLinkedin/></h3>
                    </div>
                    <div className="col-md-3 text-start">
                        <h3>Extras</h3>
                        <p>Specials</p>
                        <p>Brands</p>
                        <p>Contact Us</p>
                        <p>Site Map</p>
                        <p>My Account</p>
                        <p>Affiliates</p>
                    </div>
                    <div className="col-md-3 text-start">
                        <h3>Information</h3>
                        <p>About Us</p>
                        <p>Delivery Information</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Wish List</p>
                        <p>Gift Certificates</p>
                    </div>
                    <div className="col-md-3">
                        <h3 className = "mb-3">Download App</h3>
                        <img className = "mb-2" src={'https://i.ibb.co/Dkt5sxf/App-Store.png'} alt="" /> <br />
                        <img src={'https://i.ibb.co/YpM14gV/Google-Play.png'} alt="" />
                    </div>
                </div>
            </div>
            <hr />
          <small>&copy;-Mohammad Arif. all right resurved.</small>            
        </div>
    );
};

export default Footer;