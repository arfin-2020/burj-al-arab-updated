import { Button } from '@mui/material';
import React from 'react';
import '../../App.css';
import { useAuth } from '../Context/AuthContext';
const Login = () => {
  const  style={
        margin: '40px',
        border: "none",
    }

    const {signInWithGooogle} = useAuth()
    return (
        <div className='App' style={style}>
            <Button onClick={signInWithGooogle}>Sign in with google</Button>
        </div>
    );
};

export default Login;