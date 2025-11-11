import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../pages/Loading';

const PrivateProvider = ({children}) => {
    let {user,loading}=use(AuthContext);
    let location=useLocation();
    // console.log(location);
    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
       return children;
    }else{
        return <Navigate state={location?.pathname} to='/login'></Navigate>
   }

};

export default PrivateProvider;