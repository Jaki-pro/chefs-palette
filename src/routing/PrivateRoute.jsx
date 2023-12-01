import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <div className='d-flex justify-content-center'><Spinner animation='border' variant='primary'></Spinner></div>
    if(user) return children;
    return <div>{alert("you should log in first")} <Navigate to='/login' state={{from: location}} replace></Navigate> </div>
};
PrivateRoute.propTypes;
export default PrivateRoute;