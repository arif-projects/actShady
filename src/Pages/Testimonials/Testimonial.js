import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';

import './Testimonial.css'

const Testimonial = () => {
    const [testimonials,setTestimonials] = useState([]);
    useEffect(()=>{
        fetch('https://agile-headland-76679.herokuapp.com/testimonials')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[]);
    return (
        <div id = "testimonial" className = "testimonial my-5">
          <h1 className="header-title">What Client Say</h1>
          <div className="container">
          <Row xs={1} sm={2} md={3} style={{ rowGap: "20px", marginTop: "3rem" }}>
                {
                    testimonials.map(testimonial=><Row>
                    <div className = "col-md-4 p-5 shadow single-testimonial mx-3">

                        <div className="image-area">
                         <img className ="w-25 rounded-circle" src={testimonial.image} alt="" />
                      </div>
                      <div className="image-text">
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.position}</p>
                          <p>{testimonial.description}</p>
                      </div>
                    </div>
                    </Row>)
                }
              </Row>
          </div>
        </div>
    );
};

export default Testimonial;