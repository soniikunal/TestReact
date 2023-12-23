import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ AppComponent, ...rest }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        {...rest}
        path="*" 
        element={
          loading ? (
            <div>Loading...</div>
          ) : isAuthenticated ? (
            AppComponent  
          ) : (
            <Navigate to="/register" replace />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
