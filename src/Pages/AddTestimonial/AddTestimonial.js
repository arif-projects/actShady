import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddTestimonial = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://agile-headland-76679.herokuapp.com/testimonials',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Thanks For Your Review');
               reset();
           }
        })
  
      }
    return (
<div className="add-service">
            <h3>Please Give us Review!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}  Placeholder = "Your Name"/>
      <input {...register("position")}  Placeholder = "Your Job Title"/>
      <input {...register("image")} placeholder="Your Image Url" />
      <textarea {...register("description")}  Placeholder = "Your Review"/>
      <input className="btn btn-success" type="submit" />
    </form>
        </div>
    );
};

export default AddTestimonial;