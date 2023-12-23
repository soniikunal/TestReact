import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
};

export default useAuth;

// const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useAuth();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     // Simulate an asynchronous login process
//     setTimeout(() => {
//       // Perform login logic, e.g., validate email and password
//       // Assuming successful login for demonstration purposes
//       setIsAuthenticated(true);
//       setLoading(false);
//       history.push('/home');
//     }, 1500);
//   };