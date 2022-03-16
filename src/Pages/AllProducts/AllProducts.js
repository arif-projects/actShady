import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCurrencyDollar,BsFillCartPlusFill } from "react-icons/bs";
import Footer from '../Footer/Footer';

const AllProducts = () => {
    const [products,setproducts] = useState([]);
    useEffect(()=>{
        fetch('https://agile-headland-76679.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div className="products-container">
            <h1 className = "mt-5 header-title">ALL Products</h1>
            <div className="container">
                <div className="row">
                    {
                      products.map(product=><div className="col-lg-4 col-md-4 shadow p-3 mb-5 bg-body rounded mx-3 single-product">
                      <img className = "w-100" src={product.image} alt="" />
                      <h3>{product.name}</h3>
                      <p className="price"><BsCurrencyDollar/>{product.price}</p>
                      <p>{product.description}</p>
                      <Link to = {`/purchese/${product._id}`}>
                      <button className = "btn btn-success"><BsFillCartPlusFill/>Buy now</button>
                      </Link>
                      
                  </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;