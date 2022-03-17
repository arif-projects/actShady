import React from 'react';
import './Purchese.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
import { useRef } from 'react';

const Purchese = () => {
    const{users}=UseAuth();
    const {purcheseId} = useParams();
    const [product,setProduct] = useState({});
    // const { register, handleSubmit,reset } = useForm();
    // set cart product 
    const productNameRef = useRef();
    const productPriceRef = useRef();
    const userEmailRef = useRef();
    const userNameRef = useRef();
    const userPhoneRef = useRef();
    const productDescriptionRef = useRef();


    const handlePurchese = e =>{
        const productName = productNameRef.current.value
        const productPrice = productPriceRef.current.value
        const productDescription = productDescriptionRef.current.value
        const customerName = userNameRef.current.value
        const customerEmail = userEmailRef.current.value
        const customerPhone = userPhoneRef.current.value
        const newPurchese = {productName,productPrice,productDescription,customerName,customerEmail,customerPhone}
        fetch('https://agile-headland-76679.herokuapp.com/purcheses',{
           method: 'POST',
           headers:{
               'content-type': 'application/json'
           },
           body:JSON.stringify(newPurchese) 
        })

        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Order Placed successfully');
                e.target.reset();
            }
        })
        e.preventDefault();

    }




    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('https://agile-headland-76679.herokuapp.com/purcheses',data)
    //     .then(res=>{
    //        if(res.data.insertedId){
    //            alert('Order Placed successfully');
    //            reset();
    //        }
    //     })
    //   }

    
    useEffect(()=>{
        fetch(`https://agile-headland-76679.herokuapp.com/products/${purcheseId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])







    return (

        <div className = "add-service">
            <h4 className = "text text-success">Please Check the details double time <br />Before you click purchese button.</h4>


            <div className="container my-5">
                <div className="row">


                    <div className="col-md-6">
                        <div className="product-image-area">
                            <img src={product.image} alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="purchese-info shadow p-3 mb-5 bg-body rounded mx-5">
                        <div className="add-service">
            <h3 className = "text text-success">Purchese Info</h3>

            <form onSubmit = {handlePurchese} action="">
                 <input type="text" value = {users.displayName} ref = {userNameRef} />
                 <input type="text" value = {users.email} ref = {userEmailRef} />
                 <input type="number"  ref = {userPhoneRef} placeholder = "Your number" required />
                 <input type="text" value = {product.name} ref = {productNameRef} disabled/>
                 <input type="number" value = {product.price} ref = {productPriceRef} id="" disabled />
                 <textarea type="text" value = {product.description} ref = {productDescriptionRef}  disabled/>
                 <input  className = "btn btn-success" type="submit"  value="Purchese Item" />
            </form>















            {/* <form className = "mt-5" onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue  = {users.displayName} {...register("userName")}  Placeholder = "Your Name"/>

      <input defaultValue  = {users.email} {...register("userEmail")}  Placeholder = "Your Email"/>

      <input type="number" {...register("userPhone")}placeholder="Please Insert Your Phone Number" required />


      <input defaultValue  = {product.name} {...register("productName")}  Placeholder = "Product Name" required />

      <input defaultValue  = {product.price} type="number" {...register("productPrice")}placeholder="Price" disabled />

      <textarea defaultValue  = {product.description} {...register("description")}  Placeholder = "Product description"  disabled/>
      
      <input className="btn btn-success" type="submit" />
    </form> */}
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchese;