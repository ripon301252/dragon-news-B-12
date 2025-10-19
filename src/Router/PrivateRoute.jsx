import React, { use } from 'react';
import { AuthContext } from './ContextAuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation()
    // console.log(location)

    if(loading){
        return <Loading></Loading>
    }

   if(user && user?.email){
       return (
           <div>
               {/* <h2>This is form Private Route</h2> */}
               {children}
           </div>
       );
   }
   return <Navigate state={location.pathname} to={`/auth/login`}></Navigate>
};

export default PrivateRoute;

