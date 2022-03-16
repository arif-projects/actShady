import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
    fetch('https://agile-headland-76679.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    },[]);


    const handleDelete = id =>{
        const url = `https://agile-headland-76679.herokuapp.com/products/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                const remaining = products.filter(product=>product._id !== id);
                setProducts(remaining);
                alert('Product Delete Successfull');
            }

        })
    }
    return (
        <div>

            <h1>Manage Products</h1>
            {
                products.map(product=><div>
                    <h3>{product.name}</h3>
                    <button onClick = {()=>handleDelete(product._id)} className = "btn btn-danger">Delete Product</button>
                </div>)
            }
            
        </div>
    );
};

export default ManageProduct;