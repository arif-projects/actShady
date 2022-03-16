import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseAuth from '../../../hooks/useAuth';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MyPurchese = () => {
    const {users} = UseAuth();
    const [purchese,setPurchese] = useState([]);

    useEffect(()=>{
        const url = 'https://agile-headland-76679.herokuapp.com/purcheses'
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const order = data.filter(singleData=>users.email==singleData.customerEmail);
            setPurchese(order);
        
        })
    },[])
    // console.log(purchese);
    const handleDelete = id =>{
      const url = `https://agile-headland-76679.herokuapp.com/purcheses/${id}`;
      fetch(url,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.deletedCount){
              const remaining = purchese.filter(product=>product._id !== id);
              setPurchese(remaining);
              alert('Product Delete Successfull');
          }

      })
  }
    return (
        <div className="add-service text text-success">
            <h3>My Purchese: {purchese.length}</h3>

                   {/* table  */}
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchese.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">{row.productPrice}</TableCell>
              <TableCell align="right">{row.customerName}</TableCell>
              <TableCell align="right"><button
               onClick = {()=>handleDelete(row._id)} className = "btn btn-danger">Cencle Order</button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyPurchese;