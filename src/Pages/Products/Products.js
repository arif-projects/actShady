import React, { useEffect, useState } from 'react';
import './Product.css'
import Product from '../Product/Product';

const Products = () => {
    const [products,setproducts] = useState([]);
    useEffect(()=>{
        fetch('https://agile-headland-76679.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        
        <div>
            <div id = "features" className="products-container">
                <h1 className = "mt-5 header-title">Feature Products</h1>
                <div className="container">
                    <div className="row ">
                        {
                          products.slice(0,6).map(product=><Product
                          key = {product._id}
                          product = {product}
                          ></Product>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Products;