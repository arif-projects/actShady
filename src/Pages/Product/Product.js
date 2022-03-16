import React from 'react';
import { BsCurrencyDollar,BsFillCartPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const{_id,name,description,price,image} = props.product
    return (
        
            <div className="col-lg-4 col-md-4 shadow p-3 mb-5 bg-body rounded mx-3 single-product">
                <img className = "w-100" src={image} alt="" />
                <h3>{name}</h3>
                <p className="price"><BsCurrencyDollar/>{price}</p>
                <p>{description}</p>
                <Link to = {`/purchese/${_id}`}>
                <button className = "btn btn-success"><BsFillCartPlusFill/>Buy now</button>
                </Link>
                
            </div>
       
    );
};

export default Product;<h1>This is priuct</h1>