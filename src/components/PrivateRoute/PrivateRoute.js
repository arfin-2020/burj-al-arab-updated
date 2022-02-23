import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const PrivateRoute = () => {
    const {currentUser} = useAuth();
    // const location = useLocation();
    // console.log(location);
    return currentUser?.name ? <Outlet/> : <Navigate to="/login" />
    // <Navigate to={{
    //     pathname: '/login',
    //     state:{from: location},
    // }}/>
    // navigate("/users/123", { state: partialUser });
};

export default PrivateRoute;