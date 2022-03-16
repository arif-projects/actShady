import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllPurchese = () => {
    const [purcheses,setPurcheses] = useState([]);
    
    useEffect(()=>{
        fetch('https://agile-headland-76679.herokuapp.com/purcheses')
        .then(res=>res.json())
        .then(data=>setPurcheses(data))
    },[])
    return (
        <div>
           <h3>All Purchese</h3> 
           <div className="container">
           <div className="row">
           {
               purcheses.map(purchese=><div className = "col-md-3">
               
                 
                        <h3>{purchese.customerName}</h3>
                        <p>{purchese.customerEmail}</p>
                        <p>{purchese.customerPhone}</p>
                        <p>{purchese.productName}</p>
                  
               
               </div>)
           }
           </div>
           </div>
        </div>
    );
};

export default AllPurchese;