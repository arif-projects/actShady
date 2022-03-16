import React from 'react';
import UseAuth from '../../../hooks/useAuth';
const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    return (
        <div>    
            <h3>Please SignIn</h3>
            <button onClick = {signInUsingGoogle} className="btn btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;