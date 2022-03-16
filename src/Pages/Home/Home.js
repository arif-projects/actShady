import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import Products from '../Products/Products';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;