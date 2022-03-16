import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const handleOnBlur = e =>{
            setEmail(e.target.value);
    }
    console.log(email);


    const handleAdminSubmit = e =>{
       e.preventDefault();
    }
    return (
        <div>
            <h3 className="add-service text text-success">Make Admin</h3>


            <form onSubmit = {handleAdminSubmit} action="">
            <TextField 
             label="Email" 
             type = "email"
             onBlur = {handleOnBlur}
             variant="outlined"/>
             <br /><br />
            <Button type = "submit" variant="contained">
               Make Admin
            </Button>

            </form>
        </div>
    );
};

export default MakeAdmin;