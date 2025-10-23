import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/pages/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation()
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    // if user --> return children
    if(user && user?.email){
        return children;

    }
    
    // else --> Navigate to Login

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;