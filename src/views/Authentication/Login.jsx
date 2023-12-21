// Login.js
import React, { useState } from 'react';
import { login } from '../../config/authServices.js';
import { Box, Grid, } from '@mui/material'
import { Input, FormLabel, FormControl, Button } from '@mui/joy'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await login(username, password);
      console.log('Login successful:', result);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={0} md={8} sx={{ borderRight: '1px solid #64626233' }}>
          <Box>xs=6 md=8</Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', flexDirection: 'column' }}>
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button onClick={handleLogin} size="lg" sx={{ my: 2 }}>Login</Button>
          </Box>
        </Grid>
      </Grid>

    </>
  );
};

export default Login;
