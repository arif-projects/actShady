import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const AllProduct = () => {
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
        <div className="add-service">
            <h3 className = "text text-success">All Products: {products.length}</h3>


            <TableContainer component={Paper}>
      
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
              <button onClick = {()=>handleDelete(row._id)} className = "btn btn-danger">Delete Product</button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      
    </TableContainer>
        </div>
    );
};

export default AllProduct;