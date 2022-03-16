import axios from 'axios';
import './AddProducts.css'
import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://agile-headland-76679.herokuapp.com/products',data)
      .then(res=>{
         if(res.data.insertedId){
             alert('Product added successfully');
             reset();
         }
      })

    }
    return (
        <div className="add-service text text-success">
            <h3>Add a Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}  Placeholder = "Product Name"/>
      <input {...register("image")} placeholder="Product Image Url" />
      <input type="number" {...register("price")}placeholder="Price" />
      <textarea {...register("description")}  Placeholder = "Product description"/>
      <input className="btn btn-success" type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;