import { Button } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import { useAuth } from '../Context/AuthContext';
const Login = () => {
  const  style={
        margin: '40px',
        border: "none",
    }

    const {signInWithGooogle} = useAuth();
    const location = useLocation();
    // const navigate = useNavigate()
    console.log(location);
    // const redirect_uri = location.state?.from || '/';
    //     console.log('came from', redirect_uri)
    const googleSignIn = () =>{
        try{
            signInWithGooogle()
            // navigate(`${redirect_url}`);
            // navigate(`${location}`, { state: '' });
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