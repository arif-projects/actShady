import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
       <div className = "banner">
           <div className="banner-title text-start">
            <h1> <span>Act Shady</span> lens makes <br /> life looks happier</h1>
            <Link to = "/allProducts">
            <button className = "btn btn-success">Explore <BsArrowRight/> </button>
            </Link>
            
           </div>
           <div className="banner-image">
             <img src={'https://i.ibb.co/ScqT5Q7/black-aviator-sunglasses-with-reflection-on-black-background-picture-id830609446-k-20-m-830609446-s.jpg'} alt="" />
           </div>

       </div>
    );
};

export default Banner;