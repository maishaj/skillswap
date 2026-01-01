import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {

    const {user}=use(AuthContext);
    const location=useLocation();

    if(user && user?.email)
    {
        return children;
    }
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>

};

export default PrivateRoute;