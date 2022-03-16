import React from 'react';
import './About.css'
import { BsCheckLg } from "react-icons/bs";
import { FaPiggyBank,FaBusinessTime } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { GiWorld} from "react-icons/gi";

const About = () => {
    return (
        <div className = "about my-5 p-5 shadow p-3 mb-5 rounded">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6">
                         <div className="description text-start">
                             <h1 className = "text text-success">Our Store History</h1>
                             <p className = "mb-3">There are many variations of passages of Lorem Ipsum but the text <br /> Dum majority have suffered alteration in some form humour</p>
                             <p><BsCheckLg/> Owning Pair Of Sunglasses Fashion.</p>
                             <p><BsCheckLg/> Important Protect Your Sunglasses</p>
                             <p><BsCheckLg/> Cataracts One Leading Blindness.</p>
                             <button className="btn btn-primary">Know More.</button>
                         </div>
                     </div>
                     <div className="col-md-6">
                         <div className="logo-section p-5 ">
                             <div className="container">
                                 <div className="row">
                                     <div className="col-md-6">
                                     <FaPiggyBank/>
                                         <h1>240+</h1>
                                         <p>Perfect Money Saver</p>
                                     </div>
                                     <div className="col-md-6">
                                         <GrMapLocation/>
                                         <h3>100+</h3>
                                         <p>Cities Of Presence</p>
                                     </div>
                                     <div className="col-md-6">
                                     <FaBusinessTime/>
                                         <h3>1920</h3>
                                         <p>Year Of Foundation</p>
                                     </div>
                                     <div className="col-md-6">
                                     <GiWorld/>
                                         <h3>100%</h3>
                                         <p>World Wide Services</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default About;