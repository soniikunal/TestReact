import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toastError } from '../Utils/Toasts';
// import { useAuth } from '../hooks/AuthContext';
import NavLayout from '../Components/MUI/NavLayout.jsx'
import CircularProgress from '@mui/joy/CircularProgress';


const PrivateRoute = ({ AppComponent, ...rest }) => {
  // const { isAuthenticated, loading } = useAuth();
  // const { user } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = sessionStorage.getItem('userDetail')
    if (!token) {
      toastError('Login first!')
      setLoading(false)
      setIsAuthenticated(false)
    } else {
      setLoading(false)
    }
  })
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        {...rest}
        path="*"
        element={
          loading ? (
            <NavLayout AppComponent={<CircularProgress sx={{ alignSelf: 'center', marginInline: 'auto' }} />} />
          ) : isAuthenticated ? (
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
