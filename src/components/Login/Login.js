import { Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';
import { useAuth } from '../Context/AuthContext';
const Login = () => {
  const  style={
        margin: '40px',
        border: "none",
    }

    const {signInWithGooogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    const redirect_uri = location.state?.from?.pathname || "/";
    console.log('from login----------',redirect_uri);
    // const redirect_uri = location.state?.from || '/';
    //     console.log('came from', redirect_uri)
    const googleSignIn = async() =>{
        try{
          await signInWithGooogle()
            navigate(`${redirect_uri}`, { replace: true });
        }catch(error){
            console.log(error)
        }
           
    }
    return (
        <div className='App' style={style}>
            <Button onClick={googleSignIn}>Sign in with google</Button>
        </div>
    );
};

export default Login;