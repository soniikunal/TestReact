import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toastError } from '../Utils/Toasts';
import { useAuth } from '../hooks/AuthContext';

const PrivateRoute = ({ AppComponent, ...rest }) => {
  // const { isAuthenticated, loading } = useAuth();
  const { user } = useAuth();
  useEffect(()=>{
    if(!user) toastError('Login first!')
  })
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        {...rest}
        path="*" 
        element={
          loading ? (
            <div>Loading...</div>
          ) : user ? (
            AppComponent  
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
