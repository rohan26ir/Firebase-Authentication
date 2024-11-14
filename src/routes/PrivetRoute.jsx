import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  if(loading){
    return <span className="loading loading-spinner text-error text-center"></span>
  }

  if (user) {
    return children;
  }
  return (

  <Navigate to={'/signin'}></Navigate>
  
)
};

export default PrivateRoute;